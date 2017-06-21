(function(global){
    var generateImportSnippet = puff.generateImportSnippet; var cascadeIntoOutput = puff.cascadeIntoOutput; var cio = puff.cascadeIntoOutput; var sort = puff.sort; var s = puff.sort; var rest = puff.rest; var split = puff.split; var join = puff.join; var trim = puff.trim; var str = puff.str; var log = puff.log; var nth = puff.ixc; var n = puff.ixc; var ixc = puff.ixc; var nthc = puff.ixc; var first = puff.first; var second = puff.second; var third = puff.third; var fourth = puff.fourth; var id = puff.id; var cleave = puff.cleave; var cl = puff.cleave; var cleave_ = puff.cleave_; var cl_ = puff.cleave_; var cleaveObject = puff.cleaveObject; var clo = puff.cleaveObject; var cleaveObject_ = puff.cleaveObject_; var clo_ = puff.cleaveObject_; var repeat = puff.repeat; var rep = puff.repeat; var repeatAccumulate = puff.repeatAccumulate; var repAc = puff.repeatAccumulate; var twoArgs = puff.twoArgs; var plus2 = puff.plus2; var minus2 = puff.minus2; var times2 = puff.times2; var div2 = puff.div2; var min2 = puff.min2; var max2 = puff.max2; var apply = puff.apply; var ap = puff.apply; var call = puff.call; var ca = puff.call; var square = puff.square; var xx = puff.square; var initArray = puff.initArray; var ia = puff.initArray; var quad = puff.quad; var raiseTo = puff.raiseTo; var e = puff.raiseTo; var pollute = puff.pollute; var compose = puff.compose; var c = puff.compose; var rCompose = puff.rCompose; var r = puff.rCompose; var rComposeOn = puff.rComposeOn; var rOn = puff.rComposeOn; var partialLeft = puff.partialLeft; var _p = puff.partialLeft; var partialRight = puff.partialRight; var p_ = puff.partialRight; var curryLeft = puff.curryLeft; var _c = puff.curryLeft; var curryRight = puff.curryRight; var c_ = puff.curryRight; var index = puff.index; var ix = puff.index; var bind = puff.bind; var b = puff.bind; var length = puff.length; var l = puff.length; var shuffle = puff.shuffle; var sh = puff.shuffle; var randomElement = puff.randomElement; var re = puff.randomElement; var map = puff.map; var eachKey = puff.eachKey; var mapKey = puff.mapKey; var ehk = puff.eachKey; var mpk = puff.mapKey; var reduceKey = puff.reduceKey; var rdk = puff.reduceKey; var each = puff.each; var eh = puff.each; var filter = puff.filter; var fi = puff.filter; var m = puff.map; var rank = puff.rank; var ra = puff.rank; var crossMap = puff.crossMap; var x = puff.crossMap; var cells = puff.cells; var reduce = puff.reduce; var rd = puff.reduce; var plus = puff.plus; var minus = puff.minus; var times = puff.times; var div = puff.div; var min = puff.min; var max = puff.max; var array = puff.array; var a = puff.array; var always = puff.always; var al = puff.always; var augment = puff.augment; var augmentLeft = puff.augmentLeft; var _au = puff.augmentLeft; var augmentRight = puff.augmentRight; var au_ = puff.augmentRight; var au = puff.augment; var slice = puff.slice; var sl = puff.slice; var toString = puff.toString; var last = puff.last; var args = puff.args; var lambda = puff.lambda; var f = puff.lambda; var splitJoin = puff.splitJoin; var cat = puff.cat; var mapcat = puff.mapcat; var nextCellIndex = puff.nextCellIndex; var guessRank = puff.guessRank; var n0 = puff.n0; var n00 = puff.n00; var n000 = puff.n000; var n001 = puff.n001; var n002 = puff.n002; var n01 = puff.n01; var n010 = puff.n010; var n011 = puff.n011; var n012 = puff.n012; var n02 = puff.n02; var n020 = puff.n020; var n021 = puff.n021; var n022 = puff.n022; var n1 = puff.n1; var n10 = puff.n10; var n100 = puff.n100; var n101 = puff.n101; var n102 = puff.n102; var n11 = puff.n11; var n110 = puff.n110; var n111 = puff.n111; var n112 = puff.n112; var n12 = puff.n12; var n120 = puff.n120; var n121 = puff.n121; var n122 = puff.n122; var n2 = puff.n2; var n20 = puff.n20; var n200 = puff.n200; var n201 = puff.n201; var n202 = puff.n202; var n21 = puff.n21; var n210 = puff.n210; var n211 = puff.n211; var n212 = puff.n212; var n22 = puff.n22; var n220 = puff.n220; var n221 = puff.n221; var n222 = puff.n222; var oneArg = puff.oneArg; var f1 = puff.oneArg; var f2 = puff.twoArgs; var threeArgs = puff.threeArgs; var f3 = puff.threeArgs; var callMethod = puff.callMethod; var md = puff.callMethod; var unique = puff.unique; var uniq = puff.unique; var groupBy = puff.groupBy; var gb = puff.groupBy; var ungroup = puff.ungroup; var ug = puff.ungroup; var unkey = puff.unkey; var uk = puff.unkey;

    function getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return [PIXEL_RATIO*(evt.clientX - rect.left), PIXEL_RATIO*(evt.clientY - rect.top)];
    }

    function subclass(superConstructor,constructor){
	function surrogateConstructor(){};
	surrogateConstructor.prototype = superConstructor.prototype;
	var prototypeObject = new surrogateConstructor();
	prototypeObject.constructor = constructor;
	constructor.prototype = prototypeObject;
        return constructor;
    }

    var chars = "abcdefghijklmnopqrstuvwxyz01234567890";
    function randomCharacter(){
        var c = chars[Math.floor(Math.random()*chars.length)];
        return (Math.random()<0.5) ? c.toUpperCase() : c;
    }

    function randomString(n){
        return ia(n,randomCharacter).join("");
    }

    function oppositePlayer(p){
        if(p==="p1") return "p2";
        if(p==="p2") return "p1";
        throw new Error("Invalid player designator"+p);
    }

    function urlWithoutParameters(url){
        var urlParts = (url||document.URL).split("?");
        if(urlParts.length===1) return document.URL;
        return urlParts.slice(0,urlParts.length-1).join("?");
    }

    function groupByThree(l){
        var out = [];
        var tmp = [];
        var n = l.length;
        var c = 0;
        for(var i = 0;i<n;i++){
            tmp.push(l[i]);
            c++;
            if(c===3){
                out.push(tmp);
                tmp = [];
                c=0;
            }
        }
        return out;
    }

    var FirebaseTwoPlayerChargesView
            = subclass(ChargesView,
                       function(player,model,canvas,firebaseInstance,options){
                           this.setLocalPlayer(player);
                           ChargesView.call(this,model,canvas,options);
                           this.firebase = firebaseInstance;
                           options = cascadeIntoOutput(options||{},FirebaseTwoPlayerChargesView.defaultOptions);
                           this.gameId = options('gameId');
                           var db = firebaseInstance.database();
                           if(!this.gameId) {
                               this.gameStarter = true;
                               this.gameId = randomString(32);
                               this.movesRef = db.ref("/games/"+this.gameId+"/moves");
                               this.stateRef = db.ref(FirebaseTwoPlayerChargesView.gameIdToStateRefLocation(this.gameId));
                               this.stateRef.set(this.model.toJSON());
                               this.cursorBuffurRef = db.ref("/games/"+this.gameId+"/cursor");
                           } else {
                               this.gameStarter = false;
                               this.state = "waitingForState";
                               this.movesRef = db.ref("/games/"+this.gameId+"/mouseMoves");
                               this.stateRef = db.ref(FirebaseTwoPlayerChargesView.gameIdToStateRefLocation(this.gameId));
                               this.cursorBuffurRef = db.ref("/games/"+this.gameId+"/cursor");
                           }
                           this.shareUrl = urlWithoutParameters(document.URL)+"?gameId="+this.gameId+"&player="+oppositePlayer(this.localPlayer);
                           this.updateCursorBuffer = [];
                           this.updateCursorBufferSize = options("updateCursorBufferSize");
                           this.cursorBuffurRef.on("value",this.method("handleCursorBufferSet"));
                           var linkEl = document.createElement("a");
                           linkEl.href=this.shareUrl;
                           linkEl.innerHTML = "Give this link to your opponent.";
                           this.canvas.parentElement.insertBefore(linkEl,this.canvas);
                           this.sendInterval = options("sendInterval");
                           this.chatDiv = options('chatDiv');
                           this.chatInput = options('chatInput');
                           if(this.chatDiv && this.chatInput){
                               this.setupChat();
                           }
                           setInterval(this.method("updateWithoutDrawing"),1000);
                           
    });
    FirebaseTwoPlayerChargesView.defaultOptions = {
        updateCursorBufferSize:10,
        sendInterval:1000,
        chatDiv:undefined,
        chatInput:undefined
    };

    FirebaseTwoPlayerChargesView.prototype.setupChat = function(){
        this.messagesRef = db.ref("/games/"+this.gameId+"/messages");
        this.messagesRef.on("child_added",this.method("handleChatMessage"));
        this.chatInput.addEventListener("keyup",this.method("handleChatKeyUp"));        
    };

    FirebaseTwoPlayerChargesView.prototype.handleChatMessage = function(snapshot){
        var msg = snapshot.val();
        this.chatDiv.appendChild(msg);
    };

    FirebaseTwoPlayerChargesView.prototype.handleChatKeyUp = function(evt){
        if(e.keyCode===13){
            console.log("Got enter");
        };
    };

    FirebaseTwoPlayerChargesView.gameIdToStateRefLocation = function(gameId){
        return "/games/"+this.gameId+"/state";
    };

    FirebaseTwoPlayerChargesView.prototype
        .updateWithoutDrawing = function(){
            if(this.opponentsTurnP()){
                if(this.updateCursorBuffer.length>0){
                    var op = this.updateCursorBuffer.pop();
                    if(op[0]==="m"){
                        this.model.setCursor(op.slice(1,op.length));
                    } else if(op[0]==="c"){
                        this.model.setCursor(op.slice(1,2));
                        this.model.click();
                    } else if(op[0]==="x"){
                        this.model.cancelMove();
                    }
                }
            }
//            ChargesView.prototype.draw.call(this);
        };

    FirebaseTwoPlayerChargesView.prototype
        .draw = function(){
            if(this.opponentsTurnP()){
                if(this.updateCursorBuffer.length>0){
                    var op = this.updateCursorBuffer.pop();
                    if(op[0]==="m"){
                        this.model.setCursor(op.slice(1,op.length));
                    } else if(op[0]==="c"){
                        this.model.setCursor(op.slice(1,3));
                        this.model.click();
                        this.model.syncFromJSON(op[3]);
                    } else if(op[0]==="x"){
                        this.model.cancelMove();
                        this.model.syncFromJSON(op[3]);
                    }
                }
            }
            ChargesView.prototype.draw.call(this);
        };

    FirebaseTwoPlayerChargesView.prototype
        .sendAndClearCursorBuffer = function(){
            this.cursorBuffurRef.set(this.updateCursorBuffer);
            this.updateCursorBuffer = [];
        };

    FirebaseTwoPlayerChargesView.prototype
        .handleCursorBufferSet = function(sn){
            var newVals = sn.val();
            if(newVals && this.opponentsTurnP()){
                this.updateCursorBuffer.unshift.apply(this.updateCursorBuffer,newVals.reverse());
            }
        };

    FirebaseTwoPlayerChargesView.prototype
        .drawTicks = function(){
                    var ctx = this.canvas.getContext("2d");
        ctx.font = "10pt Calibri";
            if(this.model.mode==="updating"){
                ctx.fillText("Ticks Left: "+this.model.ticksLeft,10,10);
            } else if(this.model.mode==="p1turn"){
                if(this.localPlayer==="p1"){
                    ctx.fillText("Your Turn (c to cancel move). You are black.",10,10);
                } else {
                    ctx.fillText("Black's Turn (c to cancel move)",10,10);
                }                
            } else if(this.model.mode==="p2turn"){
                if(this.localPlayer === "p2"){
                    ctx.fillText("Your Turn (c to cancel move). You are white.",10,10);
                } else {
                    ctx.fillText("White's Turn (c to cancel move)",10,10);
                }
            }
        };

    FirebaseTwoPlayerChargesView.prototype
        .setLocalPlayer = function(p){
            if(p==="p1"||p==="p2") {
                this.localPlayer = p;
            } else {
                throw new Error("Invalid local player designator: ", p);
            }
            return this;
        };

    FirebaseTwoPlayerChargesView.prototype
        .myTurnP = function(){
            return this.localPlayer === this.model.mode.slice(0,2);
        };

    FirebaseTwoPlayerChargesView.prototype
        .opponentsTurnP = function(){
            return oppositePlayer(this.localPlayer) === this.model.mode.slice(0,2);
        };


    FirebaseTwoPlayerChargesView.prototype
        .sendIntervalMethod = function(){
            this.sendAndClearCursorBuffer();
        };

    FirebaseTwoPlayerChargesView.prototype
        .updateCursor = function(evt){
            if(this.myTurnP()){
                var pos = ChargesView.prototype.updateCursor.call(this, evt);
                this.updateCursorBuffer.push(["m",pos[0],pos[1]]);
                if(this.updateCursorBuffer.length>this.updateCursorBufferSize){
                    this.sendAndClearCursorBuffer();
                }
            }
        };

    FirebaseTwoPlayerChargesView.prototype
        .handleClick = function(evt){
            if(this.myTurnP()){
                var pos = ChargesView.prototype.handleClick.call(this, evt);
                this.updateCursorBuffer.push(["c",pos[0],pos[1],this.model.toJSON()]);
                this.sendAndClearCursorBuffer();
            }
        };

    FirebaseTwoPlayerChargesView.prototype
        .handleKeyUp = function(evt){
            if(this.myTurnP()){
                ChargesView.prototype.handleKeyUp.call(this, evt);
                if(evt.key==="Escape"||evt.key==="c"){
                    this.updateCursorBuffer.push(["x",0,0,this.model.toJSON()]);
                    this.sendAndClearCursorBuffer();
                }                
            }
        };


    global.FirebaseTwoPlayerChargesView = FirebaseTwoPlayerChargesView;
    
    
})(window);
