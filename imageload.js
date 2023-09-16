const SIZE = 18; // 枚数
var tmp = {};
    function loadImageToTmp(){
        for(var i=1;i<=18;i++){
            const _i = i;
            const img = new Image();
            tmp[_i] = null;
            img.src = "black"+_i+".jpg"; // 連続するファイル名
            img.addEventListener("load",()=>{
                tmp[_i] = img;
            })
        }
    }
