window.addEventListener('DOMContentLoaded', function() {
    // DOMのロードが完了した時点で実行される処理
  
    var container = document.querySelector('.container');
    var mainImage = document.querySelector('.main-image');
    var alternateImage = document.querySelector('.alternate-image');
    var currentImageIndex = 0; // 現在の画像インデックスの初期値を0に設定
    var scrollOffset = 0;
  
    function loadNextImage() {
      // 次の画像をロードする関数
  
      var paddedNumber = currentImageIndex.toString().padStart(4, '0');
      alternateImage.src = 'image_' + paddedNumber + '.jpg';
      alternateImage.alt = 'Alternate Image ' + paddedNumber;
    }
  
    function scrollHandler() {
      // スクロールイベントを処理する関数
  
      var containerRect = container.getBoundingClientRect();
      var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      var scrollDiff = scrollPosition - scrollOffset;
  
      console.log('Scroll Position:', scrollPosition);
  
      if (scrollDiff >= 45) {
        // スクロール量が45px以上の場合（正の方向にスクロール）
  
        scrollOffset = scrollPosition;
        if (currentImageIndex <= 180) { // 画像の枚数（最後の画像の数字-1）
          currentImageIndex++;
          loadNextImage();
        }
      } else if (scrollDiff <= -45) {
        // スクロール量が-45px以下の場合（負の方向にスクロール）
  
        currentImageIndex = Math.max(currentImageIndex - 1, 0);
        var paddedNumber = currentImageIndex.toString().padStart(4, '0');
        alternateImage.src = 'image_' + paddedNumber + '.jpg';
        alternateImage.alt = 'Alternate Image ' + paddedNumber;
        scrollOffset = scrollPosition;
      }
  
      if (scrollPosition > containerRect.top) {
        // スクロール位置がコンテナの上端を超えた場合
  
        mainImage.style.display = 'none';
        alternateImage.style.display = 'block';
        alternateImage.style.position = 'avsolute';
      } else {
        mainImage.style.display = 'block';
        alternateImage.style.display = 'none';
      }
    }
  
    window.addEventListener('scroll', scrollHandler);
    loadNextImage();
  });