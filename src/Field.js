var Field = cc.Node.extend({
	ctor: function() {
		this._super();
		this.WIDTH = 100;
		this.HEIGHT = 75;
        this.MAP = [
            ['#','#','#','#','#','#','#','#'],
            ['#','#','#','#','#','#','#','#'],
            ['#','#','#','#','#','#','#','#'],
            ['#','#','#','#','#','#','#','#'],
            ['#','#','#','#','#','#','#','#'],
            ['#','#','#','#','#','#','#','#'],
            ['#','#','#','#','#','#','#','#'],
            ['#','#','#','#','#','#','#','#']
        ];
        this.boxArray = new Array(8);
        for( var i = 0; i < 8; i++) {
        	this.boxArray[ i ] = new Array(8);
        }
        for( var i = 0; i < 8; i++ ) {
        	for( var j = 0; j < 8; j++ ){
        		this.boxArray[ i ][ j ] = new Box(); 
        	}
        }
		for ( var r = 0; r < 8; r++ ) {
			for( var c = 0; c < 8; c++ ){
	   	 		this.boxArray[ r ][ c ].setAnchorPoint( cc.p( 0, 0 ) );
	    		this.boxArray[ r ][ c ].setPosition( cc.p( 200 + c * this.WIDTH, 525 - r * this.HEIGHT ) );
	    		this.addChild( this.boxArray[ r ][ c ] );
				
			}	
		}

	},

	changeMap: function( x, y, color ) {
		if( color == 'red' ) {
			this.MAP[ x ][ y ] = 'r';
		}
		else if( color == 'green' ) {
			this.MAP[ x ][ y ] = 'g';
		}
		else if( color == 'blue' ) {
			this.MAP[ x ][ y ] = 'b';
		}
		else if( color == 'orange' ) {
			this.MAP[ x ][ y ] = 'o';
		}
		this.boxArray[ x ][ y ].changeColor( color );
	},

	reset: function() {
		this.MAP = [
            ['#','#','#','#','#','#','#','#'],
            ['#','#','#','#','#','#','#','#'],
            ['#','#','#','#','#','#','#','#'],
            ['#','#','#','#','#','#','#','#'],
            ['#','#','#','#','#','#','#','#'],
            ['#','#','#','#','#','#','#','#'],
            ['#','#','#','#','#','#','#','#'],
            ['#','#','#','#','#','#','#','#']
        ];
        for ( var r = 0; r < 8; r++ ) {
			for( var c = 0; c < 8; c++ ){
	   	 		this.boxArray[ r ][ c ].changeColor( '#' );
				
			}	
		}

	},

	getRedScore: function() {
		var score = 0;
		for ( var r = 0; r < 8; r++ ) {
			for( var c = 0; c < 8; c++ ){
				if ( this.MAP[ r ][ c ] == 'r' ) {
	   	 			score++;
				}
			}	
		}
		return score;
	},

	getGreenScore: function() {
		var score = 0;
		for ( var r = 0; r < 8; r++ ) {
			for( var c = 0; c < 8; c++ ){
				if ( this.MAP[ r ][ c ] == 'g' ) {
	   	 			score++;
				}
			}	
		}
		return score;
	},

	getBlueScore: function() {
		var score = 0;
		for ( var r = 0; r < 8; r++ ) {
			for( var c = 0; c < 8; c++ ){
				if ( this.MAP[ r ][ c ] == 'b' ) {
	   	 			score++;
				}
			}	
		}
		return score;
	},

	getOrangeScore: function() {
		var score = 0;
		for ( var r = 0; r < 8; r++ ) {
			for( var c = 0; c < 8; c++ ){
				if ( this.MAP[ r ][ c ] == 'o' ) {
	   	 			score++;
				}
			}	
		}
		return score;
	},

	getName: function( score ) {
		var name = [];
		var redScore = this.getRedScore();
		var greenScore = this.getGreenScore();
		var orangeScore = this.getOrangeScore();
		var blueScore =  this.getBlueScore();
		if ( score == redScore ) { name.push( 'RED' ); }
		if ( score == greenScore ) { name.push( 'GREEN' ); }
		if ( score == orangeScore ) { name.push( 'ORANGE' ); }
		if ( score == blueScore ) {  name.push( 'BLUE' ); }
		return name;
	},

	getRank: function() {
		var redScore = this.getRedScore();
		var greenScore = this.getGreenScore();
		var orangeScore = this.getOrangeScore();
		var blueScore =  this.getBlueScore();
		var rank = [];
		var scoreArray = [ redScore, greenScore, orangeScore, blueScore ];
		scoreArray.sort( function ( a,b ){ return b - a } );

		for ( var i = 0; i < 4; i++ ) {
			if( scoreArray[ i ] == redScore ){
			 rank[i] = [ 'red', scoreArray[ i ] ];
			 redScore = -1;
			}
			else if( scoreArray[ i ] == orangeScore ) {
				rank[i] = [ 'orange', scoreArray[ i ] ]; 
				orangeScore = -1;
			}
			else if( scoreArray[ i ] == greenScore ) { 
				rank[i] = [ 'green', scoreArray[ i ] ];
				greenScore = -1;
			} 
			else if( scoreArray[ i ] == blueScore ) {
				rank[i] = [ 'blue', scoreArray[ i ] ]; 
				blueScore = -1;
			}
		}
		return rank;
	},

	getRedRank: function() {
		var rank = this.getRank();
		for( var i = 0; i < 4; i++ ) {
			if( rank[ i ][ 0 ] == 'red' ) return i + 1; 
		}
		return 1;
	},

	getOrangeRank: function() {
		var rank = this.getRank();
		for( var i = 0; i < rank.length; i++ ) {
			if( rank[ i ][ 0 ] == 'orange' ) return i + 1;  
		}
		return 2;
	},

	getGreenRank: function() {
		var rank = this.getRank();
		for( var i = 0; i < rank.length; i++ ) {
			if( rank[ i ][ 0 ] == 'green' ) return i + 1;  
		}
		return 3;
	},

	getBlueRank: function() {
		var rank = this.getRank();
		for( var i = 0; i < rank.length; i++ ) {
			if( rank[ i ][ 0 ] == 'blue' ) return i + 1;  
		}
		return 4;
	},

	getWinnerNumber: function() {
		var rank = this.getRank();
		var i = 0;
		for ( i = 0; i < rank.length - 1; i++ ) {
			if( rank[ i ][ 1 ] != rank[ i+1 ][ 1 ] ) break;
		}
		i++;
		return i;
	},

	getMap: function() {
		return this.MAP;
	}
})
