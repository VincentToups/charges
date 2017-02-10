(function(global){
    var generateImportSnippet = puff.generateImportSnippet; var cascadeIntoOutput = puff.cascadeIntoOutput; var cio = puff.cascadeIntoOutput; var sort = puff.sort; var s = puff.sort; var rest = puff.rest; var split = puff.split; var join = puff.join; var trim = puff.trim; var str = puff.str; var log = puff.log; var nth = puff.ixc; var n = puff.ixc; var ixc = puff.ixc; var nthc = puff.ixc; var first = puff.first; var second = puff.second; var third = puff.third; var fourth = puff.fourth; var id = puff.id; var cleave = puff.cleave; var cl = puff.cleave; var cleave_ = puff.cleave_; var cl_ = puff.cleave_; var cleaveObject = puff.cleaveObject; var clo = puff.cleaveObject; var cleaveObject_ = puff.cleaveObject_; var clo_ = puff.cleaveObject_; var repeat = puff.repeat; var rep = puff.repeat; var repeatAccumulate = puff.repeatAccumulate; var repAc = puff.repeatAccumulate; var twoArgs = puff.twoArgs; var plus2 = puff.plus2; var minus2 = puff.minus2; var times2 = puff.times2; var div2 = puff.div2; var min2 = puff.min2; var max2 = puff.max2; var apply = puff.apply; var ap = puff.apply; var call = puff.call; var ca = puff.call; var square = puff.square; var xx = puff.square; var initArray = puff.initArray; var ia = puff.initArray; var quad = puff.quad; var raiseTo = puff.raiseTo; var e = puff.raiseTo; var pollute = puff.pollute; var compose = puff.compose; var c = puff.compose; var rCompose = puff.rCompose; var r = puff.rCompose; var rComposeOn = puff.rComposeOn; var rOn = puff.rComposeOn; var partialLeft = puff.partialLeft; var _p = puff.partialLeft; var partialRight = puff.partialRight; var p_ = puff.partialRight; var curryLeft = puff.curryLeft; var _c = puff.curryLeft; var curryRight = puff.curryRight; var c_ = puff.curryRight; var index = puff.index; var ix = puff.index; var bind = puff.bind; var b = puff.bind; var length = puff.length; var l = puff.length; var shuffle = puff.shuffle; var sh = puff.shuffle; var randomElement = puff.randomElement; var re = puff.randomElement; var map = puff.map; var eachKey = puff.eachKey; var mapKey = puff.mapKey; var ehk = puff.eachKey; var mpk = puff.mapKey; var reduceKey = puff.reduceKey; var rdk = puff.reduceKey; var each = puff.each; var eh = puff.each; var filter = puff.filter; var fi = puff.filter; var m = puff.map; var rank = puff.rank; var ra = puff.rank; var crossMap = puff.crossMap; var x = puff.crossMap; var cells = puff.cells; var reduce = puff.reduce; var rd = puff.reduce; var plus = puff.plus; var minus = puff.minus; var times = puff.times; var div = puff.div; var min = puff.min; var max = puff.max; var array = puff.array; var a = puff.array; var always = puff.always; var al = puff.always; var augment = puff.augment; var augmentLeft = puff.augmentLeft; var _au = puff.augmentLeft; var augmentRight = puff.augmentRight; var au_ = puff.augmentRight; var au = puff.augment; var slice = puff.slice; var sl = puff.slice; var toString = puff.toString; var last = puff.last; var args = puff.args; var lambda = puff.lambda; var f = puff.lambda; var splitJoin = puff.splitJoin; var cat = puff.cat; var mapcat = puff.mapcat; var nextCellIndex = puff.nextCellIndex; var guessRank = puff.guessRank; var n0 = puff.n0; var n00 = puff.n00; var n000 = puff.n000; var n001 = puff.n001; var n002 = puff.n002; var n01 = puff.n01; var n010 = puff.n010; var n011 = puff.n011; var n012 = puff.n012; var n02 = puff.n02; var n020 = puff.n020; var n021 = puff.n021; var n022 = puff.n022; var n1 = puff.n1; var n10 = puff.n10; var n100 = puff.n100; var n101 = puff.n101; var n102 = puff.n102; var n11 = puff.n11; var n110 = puff.n110; var n111 = puff.n111; var n112 = puff.n112; var n12 = puff.n12; var n120 = puff.n120; var n121 = puff.n121; var n122 = puff.n122; var n2 = puff.n2; var n20 = puff.n20; var n200 = puff.n200; var n201 = puff.n201; var n202 = puff.n202; var n21 = puff.n21; var n210 = puff.n210; var n211 = puff.n211; var n212 = puff.n212; var n22 = puff.n22; var n220 = puff.n220; var n221 = puff.n221; var n222 = puff.n222; var oneArg = puff.oneArg; var f1 = puff.oneArg; var f2 = puff.twoArgs; var threeArgs = puff.threeArgs; var f3 = puff.threeArgs; var callMethod = puff.callMethod; var md = puff.callMethod; var unique = puff.unique; var uniq = puff.unique; var groupBy = puff.groupBy; var gb = puff.groupBy; var ungroup = puff.ungroup; var ug = puff.ungroup; var unkey = puff.unkey; var uk = puff.unkey;

    var twoPi = Math.PI*2;
    
    function x0(i,n){
        return (i+1)/(n+1);
    }

    function v0(i,n){
        var x = x0(i,n);
        return 100*(0.5-x);
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

    global.Charges = Charges;
    
})(window);
