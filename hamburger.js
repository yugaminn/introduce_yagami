// 変数定義
const CLASS = "-active";
let flg = false;
let accordionFlg = false;

let humberger = document.getElementById("js-humberger");
let focusTrap = document.getElementById("js-focus-trap");
let menu = document.querySelector(".js-nav-area");
let accordionTrigger = document.querySelectorAll(".js-sp-accordion-trigger");
let accordion = document.querySelectorAll(".js-sp-accordion");

// メニュー開閉制御
humberger.addEventListener("click", (e) => { //ハンバーガーボタンが選択されたら
e.currentTarget.classList.toggle(CLASS);
menu.classList.toggle(CLASS);
if (flg) {// flgの状態で制御内容を切り替え
    backgroundFix(false);
    humberger.setAttribute("aria-expanded", "false");
    humberger.focus();
    flg = false;
} else {
    backgroundFix(true);
    humberger.setAttribute("aria-expanded", "true");
    flg = true;
}
});
window.addEventListener("keydown", () => {//escキー押下でメニューを閉じられるように
if (event.key === "Escape") {
    humberger.classList.remove(CLASS);
    menu.classList.remove(CLASS);

    backgroundFix(false);
    humberger.focus();
    humberger.setAttribute("aria-expanded", "false");
    flg = false;
}
});

// メニュー内アコーディオン制御
accordionTrigger.forEach((item) => {
item.addEventListener("click", (e) => {
    e.currentTarget.classList.toggle(CLASS);
    e.currentTarget.nextElementSibling.classList.toggle(CLASS);
    if (accordionFlg) {
    e.currentTarget.setAttribute("aria-expanded", "false");
    accordionFlg = false;
    } else {
    e.currentTarget.setAttribute("aria-expanded", "true");
    accordionFlg = true;
    }
});

});

// フォーカストラップ制御
focusTrap.addEventListener("focus", (e) => {
humberger.focus();
});