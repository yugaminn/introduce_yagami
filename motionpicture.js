const PX = 5; // 5px分の移動ごと画像を1枚進める   
const offset = $("#anim_img_box").offset(); // 画像を入れるdiv要素(position:stickyでトップに来たら固定される)
    $(window).scroll(function() {
        const y = $(window).scrollTop();
        const dy = y - offset.top;
        if(offset.top<y&&y<offset.top+SIZE*PX){
            $("#anim_img_box").css("top",0)
            const i = Math.floor(dy / PX);
            if(i<=0||i>=SIZE) return;
            if(tmp[i].src) image.src = tmp[i].src;
        }else if(y>=offset.top+SIZE*PX){
            $("#anim_img_box").css("top","-"+(dy-SIZE*PX)); // スクロール分が終了したときに移動を始める
        }
    }); 