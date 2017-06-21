(function(global){
    var generateImportSnippet = puff.generateImportSnippet; var cascadeIntoOutput = puff.cascadeIntoOutput; var cio = puff.cascadeIntoOutput; var sort = puff.sort; var s = puff.sort; var rest = puff.rest; var split = puff.split; var join = puff.join; var trim = puff.trim; var str = puff.str; var log = puff.log; var nth = puff.ixc; var n = puff.ixc; var ixc = puff.ixc; var nthc = puff.ixc; var first = puff.first; var second = puff.second; var third = puff.third; var fourth = puff.fourth; var id = puff.id; var cleave = puff.cleave; var cl = puff.cleave; var cleave_ = puff.cleave_; var cl_ = puff.cleave_; var cleaveObject = puff.cleaveObject; var clo = puff.cleaveObject; var cleaveObject_ = puff.cleaveObject_; var clo_ = puff.cleaveObject_; var repeat = puff.repeat; var rep = puff.repeat; var repeatAccumulate = puff.repeatAccumulate; var repAc = puff.repeatAccumulate; var twoArgs = puff.twoArgs; var plus2 = puff.plus2; var minus2 = puff.minus2; var times2 = puff.times2; var div2 = puff.div2; var min2 = puff.min2; var max2 = puff.max2; var apply = puff.apply; var ap = puff.apply; var call = puff.call; var ca = puff.call; var square = puff.square; var xx = puff.square; var initArray = puff.initArray; var ia = puff.initArray; var quad = puff.quad; var raiseTo = puff.raiseTo; var e = puff.raiseTo; var pollute = puff.pollute; var compose = puff.compose; var c = puff.compose; var rCompose = puff.rCompose; var r = puff.rCompose; var rComposeOn = puff.rComposeOn; var rOn = puff.rComposeOn; var partialLeft = puff.partialLeft; var _p = puff.partialLeft; var partialRight = puff.partialRight; var p_ = puff.partialRight; var curryLeft = puff.curryLeft; var _c = puff.curryLeft; var curryRight = puff.curryRight; var c_ = puff.curryRight; var index = puff.index; var ix = puff.index; var bind = puff.bind; var b = puff.bind; var length = puff.length; var l = puff.length; var shuffle = puff.shuffle; var sh = puff.shuffle; var randomElement = puff.randomElement; var re = puff.randomElement; var map = puff.map; var eachKey = puff.eachKey; var mapKey = puff.mapKey; var ehk = puff.eachKey; var mpk = puff.mapKey; var reduceKey = puff.reduceKey; var rdk = puff.reduceKey; var each = puff.each; var eh = puff.each; var filter = puff.filter; var fi = puff.filter; var m = puff.map; var rank = puff.rank; var ra = puff.rank; var crossMap = puff.crossMap; var x = puff.crossMap; var cells = puff.cells; var reduce = puff.reduce; var rd = puff.reduce; var plus = puff.plus; var minus = puff.minus; var times = puff.times; var div = puff.div; var min = puff.min; var max = puff.max; var array = puff.array; var a = puff.array; var always = puff.always; var al = puff.always; var augment = puff.augment; var augmentLeft = puff.augmentLeft; var _au = puff.augmentLeft; var augmentRight = puff.augmentRight; var au_ = puff.augmentRight; var au = puff.augment; var slice = puff.slice; var sl = puff.slice; var toString = puff.toString; var last = puff.last; var args = puff.args; var lambda = puff.lambda; var f = puff.lambda; var splitJoin = puff.splitJoin; var cat = puff.cat; var mapcat = puff.mapcat; var nextCellIndex = puff.nextCellIndex; var guessRank = puff.guessRank; var n0 = puff.n0; var n00 = puff.n00; var n000 = puff.n000; var n001 = puff.n001; var n002 = puff.n002; var n01 = puff.n01; var n010 = puff.n010; var n011 = puff.n011; var n012 = puff.n012; var n02 = puff.n02; var n020 = puff.n020; var n021 = puff.n021; var n022 = puff.n022; var n1 = puff.n1; var n10 = puff.n10; var n100 = puff.n100; var n101 = puff.n101; var n102 = puff.n102; var n11 = puff.n11; var n110 = puff.n110; var n111 = puff.n111; var n112 = puff.n112; var n12 = puff.n12; var n120 = puff.n120; var n121 = puff.n121; var n122 = puff.n122; var n2 = puff.n2; var n20 = puff.n20; var n200 = puff.n200; var n201 = puff.n201; var n202 = puff.n202; var n21 = puff.n21; var n210 = puff.n210; var n211 = puff.n211; var n212 = puff.n212; var n22 = puff.n22; var n220 = puff.n220; var n221 = puff.n221; var n222 = puff.n222; var oneArg = puff.oneArg; var f1 = puff.oneArg; var f2 = puff.twoArgs; var threeArgs = puff.threeArgs; var f3 = puff.threeArgs; var callMethod = puff.callMethod; var md = puff.callMethod; var unique = puff.unique; var uniq = puff.unique; var groupBy = puff.groupBy; var gb = puff.groupBy; var ungroup = puff.ungroup; var ug = puff.ungroup; var unkey = puff.unkey; var uk = puff.unkey;

    var twoPi = Math.PI*2;
    var lavendarSeq = "#77a670 #82b37c #79a872 #78ac6c #98879a #86ac97 #7d9a84 #353f36 #313828 #2d332f #4d5f4f #30413b #425654 #3a4b45 #573a4c #678182 #2c272e #92506c #8aa094 #8c9f8c #6b8788 #384c4a #514b55 #c6b5bb #3f4541 #7c8187 #88865f #1c1e1b #26322e #333532 #6d626a #525246 #55454f #9aac6e #777175 #9ba38b #7c7469 #7d9968 #789c70 #4f684b #97bc79 #7f8c82 #676966 #5e7654 #8fa88a #3f4e47 #2e412d #2b3a27 #95b671".split(" ");
    var reducedLavendarSeq = "#98879a #9ba38b #78ac6c #7c8187 #6d626a #573a4c #2e412d #1c1e1b".split(" ");

    function vdist(v1,v2){
        var d = [v1[0]-v2[0],v1[1]-v2[1]];
        var l = Math.sqrt(d[0]*d[0]+d[1]*d[1]);
        return l;
    }


    function getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return [PIXEL_RATIO*(evt.clientX - rect.left), PIXEL_RATIO*(evt.clientY - rect.top)];
    }

    function ChargesView(model,canvas,options){
        options = cascadeIntoOutput(options||{},ChargesView.defaultOptions);
        this.model = model;
        this.canvas = canvas;
        this.width = canvas.width;
        this.height = canvas.height;
        this.puckRadius = options('puckRadius');
        this.puckColor = options('puckColor');
        this.pieceRadius = options('pieceRadius');
        this.p1Color = options('p1Color');
        this.p2Color = options('p2Color');
        this.traces = document.createElement('canvas');
        this.traces.width = this.width;
        this.traces.height = this.height;
        this.traceColor = options("traceColor");
        this.backGroundColor = options("backGroundColor");
        this.previousPuckPositions = model.getPuckPositions();
        canvas.addEventListener("mousemove",this.method("updateCursor"));
        canvas.addEventListener("click",this.method("handleClick"));
        canvas.addEventListener("keypress",this.method("handleKeyUp"));
    };
    ChargesView.defaultOptions = {
        pieceRadius:4,
        puckRadius:2,
        puckColor:"grey",
        p1Color:"black",
        p2Color:"white",
        backGroundColor:"white",
        traceColor:colorSequence(reducedLavendarSeq)
    };

    ChargesView.prototype.handleKeyUp = function(evt){
        console.log(evt.key);
        if(evt.key==="Escape"||evt.key==="c") this.model.cancelMove();
    };

    ChargesView.prototype.handleClick = function(evt){
        var pos = rOn(getMousePos(this.canvas,evt),
                      this.method("fromCanvas"));
        this.model.click();
        return pos;
    };

    ChargesView.prototype.method = function(name){
        return this[name].bind(this);
    };

    ChargesView.prototype.toCanvas = function(p){
        return [p[0]*this.width/PIXEL_RATIO,p[1]*this.height/PIXEL_RATIO];
    };

    ChargesView.prototype.fromCanvas = function(p){
        return [p[0]/this.width,p[1]/this.height];
    };

    ChargesView.prototype.drawPuck = function(ctx,puckPos,i){
        var pos = this.toCanvas(puckPos);
        ctx.save();
        ctx.beginPath();
        ctx.arc(pos[0],pos[1],this.puckRadius,0,twoPi);
        ctx.fillStyle = this.puckColor;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(pos[0],pos[1],this.puckRadius,0,twoPi);
        ctx.strokeStyle = "black";
        ctx.stroke();
        ctx.restore();

        var traceCtx = this.traces.getContext("2d");
        var traceStyle = this.traceColor;
        traceStyle = typeof traceStyle === "function" ? (traceStyle(i)) : traceStyle;
        traceCtx.strokeStyle = traceStyle;
        var pp = this.toCanvas(this.previousPuckPositions[i]);
        traceCtx.lineCap = "round";
        traceCtx.beginPath();
        traceCtx.lineWidth = 0.002*square(1+this.model.getPuckSpeed(i));
        traceCtx.moveTo(pp[0],pp[1]);
        traceCtx.lineTo(pos[0],pos[1]);
        traceCtx.stroke();
        this.previousPuckPositions[i] = puckPos;
    };

    ChargesView.prototype.drawPucks = function(){
        this.model.getPuckPositions().forEach(_p(this.method("drawPuck"),
                                                 this.canvas.getContext("2d")));
    };

    ChargesView.prototype.drawPieces = function(){
        var ctx = this.canvas.getContext("2d");
        this.model.forEachPlayerPiece(_p(this.method("drawPiece"),ctx));
    };

    ChargesView.prototype.drawPiece = function(ctx,piece){
        var cursorPos = this.toCanvas(this.model.getCursor());
        var pos = this.toCanvas(piece.pos.slice(0,2));
        var fillColor = piece.player === 0 ? this.p1Color : this.p2Color;
        ctx.save();
        ctx.beginPath();
        ctx.arc(pos[0],pos[1],this.pieceRadius,0,twoPi);
        ctx.fillStyle = fillColor;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(pos[0],pos[1],this.pieceRadius,0,twoPi);
        if(vdist(pos,cursorPos)<this.pieceRadius){
            ctx.strokeStyle = "black";
            ctx.lineWidth = 3;
        } else {
            ctx.strokeStyle = "black";
        }
        ctx.stroke();


        var markerColor = tinycolor(fillColor).inversion().toRgbString();
        ctx.strokeStyle = markerColor;
        ctx.beginPath();
        ctx.moveTo(pos[0]-this.pieceRadius,pos[1]);
        ctx.lineTo(pos[0]+this.pieceRadius,pos[1]);
        if(piece.pos[2]===1){
            ctx.moveTo(pos[0],pos[1]-this.pieceRadius);
            ctx.lineTo(pos[0],pos[1]+this.pieceRadius);
        }
        ctx.stroke();
        ctx.restore();
    };

    ChargesView.prototype.updateCursor = function(evt){
        var pos = rOn(getMousePos(this.canvas,evt),
                      this.method("fromCanvas"));
        this.model.setCursor(pos);
        return pos;
    };

    ChargesView.prototype.drawCursor = function(){
        var pos = this.toCanvas(this.model.getCursor());
        var ctx = this.canvas.getContext("2d");
        ctx.save();
        ctx.fillStyle = "black";
        ctx.fillRect(pos[0]-2,pos[1]-2,4,4);
        ctx.restore();
    };

    ChargesView.prototype.drawFuture = function(){
        if(this.model.future){
            var ctx = this.canvas.getContext("2d");
            ctx.save();
            ctx.strokeStyle = "red";
            var future = this.model.future;
            var f = undefined;
            var n = future.length;
            var nParticles = future[0].length;
            var i,j;
            for(i=0;i<nParticles;i++){
                ctx.beginPath();
                f = this.toCanvas(future[0][i]);
                ctx.moveTo(f[0],f[1]);
                for(j=1;j<n;j++){
                    f = this.toCanvas(future[j][i]);
                    ctx.lineTo(f[0],f[1]);
                }
                ctx.stroke();            
            }
            ctx.restore();
        }
    };

    ChargesView.prototype.drawTicks = function(){
        var ctx = this.canvas.getContext("2d");
        ctx.font = "10pt Calibri";
        if(this.model.mode==="updating"){
            ctx.fillText("Ticks Left: "+this.model.ticksLeft,10,10);
        } else if(this.model.mode==="p1turn"){
            ctx.fillText("Black's Turn (c to cancel move)",10,10);
        } else if(this.model.mode==="p2turn"){
            ctx.fillText("White's Turn (c to cancel move)",10,10);
        }
    };

    ChargesView.prototype.drawMoveBorder = function(){
        if(typeof this.model.selected !== "undefined"){
            var pos = this.toCanvas(this.model.originalPos);
            var ctx = this.canvas.getContext("2d");        
            ctx.save();
            ctx.fillStyle = "rgba(0,0,255,0.25)";
            ctx.beginPath();
            ctx.arc(pos[0],pos[1],this.canvas.width*this.model.moveRadius/PIXEL_RATIO,0,twoPi);
            ctx.fill();
            ctx.restore();
        }
    };

    ChargesView.prototype.drawScores = function(){
        var ctx = this.canvas.getContext("2d");
        ctx.save();
        ctx.fillText("Black Score: "+this.model.playerOneScore,10,21);
        ctx.fillText("White Score: "+this.model.playerTwoScore,10,32);
        ctx.restore();
    };

    ChargesView.prototype.draw = function(){
        var canvas = this.canvas;
        var ctx = canvas.getContext("2d");
        ctx.imageSmoothingEnabled = false;
        ctx.clearRect(0,0,canvas.width*6,canvas.height*6);
        ctx.drawImage(this.traces, 0,0,this.traces.width,this.traces.height);
        this.drawTicks();
        this.drawPucks();
        this.drawPieces();
        this.drawCursor();
        this.drawFuture();
        this.drawMoveBorder();
        this.drawScores();
    };

    function colorSequence(seq){
        return function(i){
            return seq[i%seq.length];
        };
    }

    global.ChargesView = ChargesView;
    global.ChargesView.colorSequence = colorSequence;

})(window);
