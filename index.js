document.addEventListener("DOMContentLoaded",main);
puff.pollute(window);
var twoPi = Math.PI*2;
var PIXEL_RATIO = (function () {
    var ctx = document.createElement("canvas").getContext("2d"),
        dpr = window.devicePixelRatio || 1,
        bsr = ctx.webkitBackingStorePixelRatio ||
              ctx.mozBackingStorePixelRatio ||
              ctx.msBackingStorePixelRatio ||
              ctx.oBackingStorePixelRatio ||
              ctx.backingStorePixelRatio || 1;

    return dpr / bsr;
})();


function createHiDPICanvas(w, h, ratio) {
    if (!ratio) { ratio = PIXEL_RATIO; }
    var can = document.createElement("canvas");
    can.width = w * ratio;
    can.height = h * ratio;
    can.style.width = w + "px";
    can.style.height = h + "px";
    can.getContext("2d").setTransform(ratio, 0, 0, ratio, 0, 0);
    return can;
}

function setHiDPICanvas(canvas, w, h, ratio) {
    if (!ratio) { ratio = PIXEL_RATIO; }
    var can = canvas;
    can.width = w * ratio;
    can.height = h * ratio;
    can.style.width = w + "px";
    can.style.height = h + "px";
    can.getContext("2d").setTransform(ratio, 0, 0, ratio, 0, 0);
}

function main(){
    var canvas = document.querySelector("#game");
    var w = Math.round(min2(window.innerWidth,window.innerHeight));    
    setHiDPICanvas(canvas,w,w);
    //canvas.getContext("2d").scale(1/2,1/2);
    // canvas.width = w;
    // canvas.height = w;
    // canvas.style.width = w;
    // canvas.style.height= w;
    window.game = new Charges({dt:0.01,
                               g:1e1,
                               ticksPerUpdate:50,
                               moveRadius:0.1});
    window.view = new ChargesView(window.game, canvas);
    window.view.drawPieces();
//    console.log(canvas);
    function loop(n){
        return function(){
            if(n>0){
                window.game.update(1);
                window.view.draw();
                requestAnimationFrame(loop(n-1));
            }
        };
    };
    requestAnimationFrame(loop(Infinity));
}
