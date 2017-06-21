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

function urlWithoutParameters(url){
    var urlParts = (url||document.URL).split("?");
    if(urlParts.length===1) return document.URL;
    return urlParts.slice(0,urlParts.length-1).join("?");
}

function getURLParameter(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
}

function oppositePlayer(p){
    if(p==="p1") return "p2";
    if(p==="p2") return "p1";
    throw new Error("Invalid player designator"+p);
}


function main(){
    var canvas = document.querySelector("#game");
    var w = Math.round(min2(window.innerWidth,window.innerHeight));
    setHiDPICanvas(canvas,w,w);
    window.provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
        console.log("Sign in success",result);
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        var maybeGameId = getURLParameter("gameId");
        if(maybeGameId){
            firebaseInstance.database().ref(FirebaseTwoPlayerChargesView.gameIdToStateRefLocation(maybeGameId)).on("value",function(sn){
                console.log("Got remote game state", sn.val());
                window.game = new Charges({dt:0.01,
                                           g:1e1,
                                           ticksPerUpdate:50,
                                           moveRadius:0.1});
                window.game.syncFromJSON(sn.val());
                window.view = new FirebaseTwoPlayerChargesView(getURLParameter("player"),
                                                               window.game,
                                                               canvas,
                                                               firebaseInstance,
                                                               {
                                                                   gameId:maybeGameId,
                                                                   chatDiv:document.querySelector("#chat-messages"),
                                                                   chatInput:document.querySelector("#chat-text")
                                                               });
                function loop(n){
                    return function(){
                        if(n>0){
                            window.game.update(1);
                            window.view.draw();
                            requestAnimationFrame(loop(n-1));
                        }
                    };
                }
                requestAnimationFrame(loop(Infinity));
                
            });
        } else {
            window.game = new Charges({dt:0.01,
                                       g:1e1,
                                       ticksPerUpdate:50,
                                       moveRadius:0.1});
            window.view = new FirebaseTwoPlayerChargesView(window.game.mode.substring(0,2),
                                                           window.game, canvas, firebaseInstance,
                                                           {
                                                               chatDiv:document.querySelector("#chat-messages"),
                                                               chatInput:document.querySelector("#chat-text")
                                                           });
            function loop(n){
                return function(){
                    if(n>0){
                        window.game.update(1);
                        window.view.draw();
                        requestAnimationFrame(loop(n-1));
                    }
                };
            }
            requestAnimationFrame(loop(Infinity));
            //    console.log(canvas);
            
        }
    }).catch(function(error) {
        console.log("Sign in failure.",error)
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
    });
    //canvas.getContext("2d").scale(1/2,1/2);
    // canvas.width = w;
    // canvas.height = w;
    // canvas.style.width = w;
    // canvas.style.height= w;

}
