document.addEventListener("DOMContentLoaded",main);
puff.pollute(window);
var twoPi = Math.PI*2;

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return [PIXEL_RATIO*(evt.clientX - rect.left), PIXEL_RATIO*(evt.clientY - rect.top)];
}

function concatElements(lst){
    return [].concat.apply([],lst);
}

function rk4(x,dx,dt,t,plus,times){
    var x1 = x;
    var a1 = dx(x1,0,t);

    var x2 = plus(x, times(a1,0.5*dt));
    var a2 = dx(x2,dt/2,t+dt/2);

    var x3 = plus(x, times(a2,0.5*dt));
    var a3 = dx(x3,dt/2,t+dt/2);

    var x4 = plus(x, times(a3,dt));
    var a4 = dx(x4,dt,t+dt);

    return plus(x, times(plus(a1,times(a2,2),times(a3,2),a4),dt/6));
}

function vtimes(v,c){
    var n = v.length;
    var o = new Array(n);
    for(var i=0;i<n;i++){
	o[i] = v[i]*c;
    }
    return o;
}

function vplus(){
    var n = arguments.length;
    var vectors = Array.prototype.slice.call(arguments, 0, n);
    var d = vectors[0].length;
    var o = new Array(d);
    for(var i = 0; i < d; i++){
	o[i] = 0;
	for(var j = 0; j < n; j++){
	    o[i] = vectors[j][i]+o[i];
	}
    }
    return o;
}

function vrk4(x,dx,dt,t){
    return rk4(x,dx,dt,t,vplus,vtimes);
}

function vdist(v1,v2){
    var d = [v1[0]-v2[0],v1[1]-v2[1]];
    var l = Math.sqrt(d[0]*d[0]+d[1]*d[1]);
    return l;
}

function gravitationalForce(v1,v2,c){
    var d = [v1[0]-v2[0],v1[1]-v2[1]];
    var l = Math.sqrt(d[0]*d[0]+d[1]*d[1]);
    var lSmall  = l<0.005;
    l = lSmall ? 5 : l;
    d[0] = d[0]/l;
    d[1] = d[1]/l;
    return lSmall ? vtimes(d,c/(l*l)) : vtimes(d,-c/(l*l));
}

function Charges(options){
    options = cascadeIntoOutput(options||{},Charges.defaltOptions);
    this.piecesPerPlayer = options('piecesPerPlayer');
    this.offsetFromGoal = options('offsetFromGoal');
    this.dt = options('dt');
    this.g = options('g');
    this.nPucks = options('nPucks');
    this.initPieces();
    this.initPucks();
    this.cursor = [0,0];
    this.mode = Math.random()<0.5 ? "p1turn" : "p2turn";
    this.next = this.mode === "p1turn" ? "p2" : "p1";
    this.validModes = {
        p1turn:true,
        p2turn:true,
        updating:true
    };
    this.ticksPerUpdate = options("ticksPerUpdate");
    this.ticksLeft = this.ticksPerUpdate;
    this.future = this.predict(this.ticksPerUpdate);
    this.selected = undefined;
    this.moveRadius = options("moveRadius");
    this.playerOneScore = 0;
    this.playerTwoScore = 0;
}

Charges.prototype.getCursor = function(){
    return [this.cursor[0],this.cursor[1]];
};

Charges.prototype.click = function(){
    var cursor = this.cursor;
    var pieces = undefined;
    if(typeof this.selected !== "undefined"){
        this.selected = undefined;
        this.setMode("updating");
        return;
    }
    if(this.mode==="updating"){
        return;
    } else if (this.mode === "p1turn") {
        pieces = this.playerOnePieces;
    } else if (this.mode === "p2turn") {
        pieces = this.playerTwoPieces;
    };
    var n = pieces.length;
    var piece = undefined;
    var bestDist = Infinity;
    var dist = undefined;
    for(var i = 0; i < n; i++){
        piece = pieces[i];
        dist = vdist(cursor, piece);
        if(dist<0.01 && dist < bestDist){
            this.bestDist = dist;
            this.originalPos = [piece[0],piece[1]];
            this.selected = i;
        }
    }    
};

Charges.prototype.cancelMove = function(){
    if(typeof this.selected === "undefined") return;
    var pieces = undefined;
    if(this.mode==="updating"){
        return;
    } else if (this.mode === "p1turn") {
        pieces = this.playerOnePieces;
    } else if (this.mode === "p2turn") {
        pieces = this.playerTwoPieces;
    };
    if(pieces){
        pieces[this.selected][0] = this.originalPos[0];
        pieces[this.selected][1] = this.originalPos[1];
        this.selected = undefined;
        this.originalPos = undefined;
    }
}

Charges.prototype.setCursor = function(p){
    this.cursor[0] = p[0];
    this.cursor[1] = p[1];
    if(typeof this.selected !== "undefined"){
        var pieces = (this.mode==="p1turn" ? this.playerOnePieces :
                      this.mode==="p2turn" ? this.playerTwoPieces : false);
        if(pieces && vdist(this.cursor,this.originalPos)<=this.moveRadius){
            pieces[this.selected][0]= p[0];
            pieces[this.selected][1]= p[1];
            this.future = this.predict(this.ticksPerUpdate);
        }
    }
    return this;
};

Charges.prototype.setMode = function(newMode){
    if(this.validModes[newMode]){
        this.mode = newMode;
    } else {
        throw new Error("Not a valid mode: "+newMode);
    }
};

Charges.defaltOptions = {
    piecesPerPlayer:10,
    offsetFromGoal:0.15,
    g:1e3,
    nPucks:7,
    dt:0.0035,
    ticksPerUpdate:50,
    moveRadius:0.1
};

Charges.prototype.method = function(name){
    return this[name].bind(this);
};

Charges.prototype.initPiecePair = function(player,i,charge){
    var spacing = 16;
    var piecesPerPlayer = this.piecesPerPlayer;
    return [[x0(i,piecesPerPlayer)-(1/(spacing*piecesPerPlayer)),
             (player===0? 0.1 : 0.9)+Math.random()*0,
             (player===0? 1 : -1)*1],
            [x0(i,piecesPerPlayer)+(1/(spacing*piecesPerPlayer)),
             (player===0? 0.1 : 0.9)+Math.random()*0,
             (player===0? 1 : -1)*-1]];

};

function x0(i,n){
    return (i+1)/(n+1);
}

function v0(i,n){
    var x = x0(i,n);
    return 100*(0.5-x);
}

Charges.prototype.initPieces = function(){
    this.playerOnePieces = concatElements(ia(this.piecesPerPlayer,
                                             _p(this.method("initPiecePair"),0)));
    this.playerTwoPieces = concatElements(ia(this.piecesPerPlayer,
                                             _p(this.method("initPiecePair"),1)));
    return this;
};

Charges.prototype.initPucks = function(){
    var np = this.nPucks;
    this.pucks = [].concat.apply([],
                                 new Array(np).fill(0).map(function(_,i){
                                     return [x0(i,np),0.5,0,v0(i,np)];
                                 }));
    this.lastPucks = this.pucks;
    return this;
};

Charges.prototype.systemDerivative = function(currentState,dt,t){
    var g = this.g;
    var n = currentState.length/4;
    var o = new Array(currentState.length);
    var x = currentState;
    var p1 = this.playerOnePieces;
    var p2 = this.playerTwoPieces;
    var np = p1.length;
    var f = undefined;
    var i,j;
    for(i = 0; i<n; i++){
        o[i*4] = x[i*4+2]*dt;
        o[i*4+1] = x[i*4+3]*dt;
        o[i*4+2] = 0;
        o[i*4+3] = 0;
        for(j=0;j<np;j++){
            f = gravitationalForce(p1[j].slice(0,2),x.slice(i*4,i*4+2),g*p1[j][2]);
            o[i*4+2] += f[0]*dt;
            o[i*4+3] += f[1]*dt;
            f = gravitationalForce(p2[j].slice(0,2),x.slice(i*4,i*4+2),g*p2[j][2]);
            o[i*4+2] += f[0]*dt;
            o[i*4+3] += f[1]*dt;
        }
        // for(j=0;j<n;j++){
        //     if(!(j===i)){
        //         f = gravitationalForce(x.slice(j*4,j*4+2),x.slice(i*4,i*4+2),0*g);
        //         o[i*4+2] += f[0]*dt;
        //         o[i*4+3] += f[1]*dt;
        //     }            
        // }
    }
    return o;
};

Charges.prototype.handleWalls = function(v,score){
    score = typeof score === "undefined" ? true : false;
    var n = v.length/4;
    var x,y;
    var toRemove = {};
    var removeCount = 0;
    for(var i = 0; i < n; i++){
        x = v[i*4];
        y = v[i*4+1];
        if(x<0||x>1){
            v[i*4+2]= -v[i*4+2];
        }        
    }
    return v;
};

Charges.prototype.handleScoring = function(){
    var pucks = this.pucks;
    var n = pucks.length/4;
    var newPucks = [];
    var y,i;
    for(i=0;i<n;i++){
        y = pucks[i*4+1];
        if(y<0){
            this.playerTwoScore++;
            this.pucks[i*4]=NaN;
            this.pucks[i*4+1]=NaN;
        } else if (y>1){
            this.playerOneScore++;
            this.pucks[i*4]=NaN;
            this.pucks[i*4+1]=NaN;
        } else {
            newPucks.push(pucks.slice(i,i+4));
        }
    }
};

Charges.prototype.update = function(steps){
    if(this.mode==="updating"){
        steps = typeof steps === "undefined" ? 1 : steps;
        for(var i = 0; i<steps; i++){
            this.lastPucks = this.pucks;
            this.pucks = vrk4(this.pucks,this.method("systemDerivative"),this.dt,0);
            this.handleWalls(this.pucks);
            this.handleScoring();
        }
        this.ticksLeft--;
        if(this.ticksLeft<=0){
            this.setMode(this.next === "p2" ? "p2turn" : "p1turn");
            this.next = this.next === "p2" ? "p1" : "p2";
            this.ticksLeft = this.ticksPerUpdate;
            this.future = this.predict(this.ticksPerUpdate);
        }
    }
};

Charges.prototype.getPuckPositions = function(from){
    var pucks = from || this.pucks;
    var positions = [];
    var n = pucks.length/4;
    for(var i = 0; i < n; i++){
        positions.push([pucks[i*4],pucks[i*4+1]]);
    }
    return positions;
};

Charges.prototype.forEachPuck = function(f,from){
    var pucks = from || this.pucks;
    var n = pucks.length/4;
    for(var i = 0; i < n; i++){
        f([pucks[i*4],pucks[i*4+1]]);
    }
    return this;
};

Charges.prototype.forEachPlayerPiece = function(f){
    var n = this.playerOnePieces.length;
    var i = 0;
    for(i=0;i<n;i++){
        f({player:0,pos:this.playerOnePieces[i]});        
    }
    n = this.playerTwoPieces.length;
    for(i=0;i<n;i++){
        f({player:1,pos:this.playerTwoPieces[i]});        
    }
    return this;
};

Charges.prototype.predict = function(steps){
    var now = Date.now();
    steps = typeof steps === "undefined" ? 1 : steps;
    var pucks = this.pucks;
    var out = [this.getPuckPositions(pucks)];
    for(var i = 0; i < steps; i++){
        pucks = vrk4(pucks,this.method("systemDerivative"),this.dt,0);
        this.handleWalls(pucks,false);
        out.push(this.getPuckPositions(pucks));
    }
    var tickTock = Date.now()-now;
    console.log("Predicting the future took: ", tickTock, "ms");
    return out;
};

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
    traceColor:"red"    
};

ChargesView.prototype.handleKeyUp = function(evt){
    console.log(evt.key);
    if(evt.key==="Escape"||evt.key==="c") this.model.cancelMove();
};

ChargesView.prototype.handleClick = function(evt){
    this.model.click();
};

Charges.prototype.pieceAt = function(p){

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
    var pp = this.toCanvas(this.previousPuckPositions[i]);
    traceCtx.beginPath();
    traceCtx.lineWidth = 0.5;
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
};

ChargesView.prototype.drawCursor = function(){
    var pos = this.toCanvas(this.model.getCursor());
    var ctx = this.canvas.getContext("2d");
    ctx.save();
    ctx.fillStyle = "black";
    ctx.fillRect(pos[0],pos[1],1,1);
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
}

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
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.drawImage(this.traces, 0,0,this.traces.width,this.traces.height);
    this.drawTicks();
    this.drawPucks();
    this.drawPieces();
    this.drawCursor();
    this.drawFuture();
    this.drawMoveBorder();
    this.drawScores();
};

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
