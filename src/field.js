var field = cc.Node.extend({
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

        //create array that collect box obj.
        this.boxArray = new Array(8);
        for( var i = 0; i < 8; i++) {
        	this.boxArray[ i ] = new Array(8);
        }
        for( var i = 0; i < 8; i++ ) {
        	for( var j = 0; j < 8; j++ ){
        		this.boxArray[ i ][ j ] = new box(); 
        	}
        }

        //draw field
		for ( var r = 0; r < 8; r++ ) {
			for( var c = 0; c < 8; c++ ){
	   	 		this.boxArray[ r ][ c ].setAnchorPoint( cc.p( 0, 0 ) );
	    		this.boxArray[ r ][ c ].setPosition( cc.p( 200 + c * this.WIDTH, 525 - r * this.HEIGHT ) );
	    		this.addChild( this.boxArray[ r ][ c ] );
				
			}	
		}

	}
	,changeMap: function( x, y, color ) {
		if( color == 'red' ) {
			this.MAP[ x ][ y ] = 'r';
		}
		else if( color == 'green' ) {
			this.MAP[ x ][ y ] = 'g';
		}
		else if( color == 'blue' ) {
			this.MAP[ x ][ y ] = 'b';
		}
		else if( color == 'pink' ) {
			this.MAP[ x ][ y ] = 'p';
		}
		this.boxArray[ x ][ y ].changeColor( color );
	}
	,reset: function() {
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

	}
	,getRedScore: function() {
		var score = 0;
		for ( var r = 0; r < 8; r++ ) {
			for( var c = 0; c < 8; c++ ){
				if ( this.MAP[ r ][ c ] == 'r' ) {
	   	 			score++;
				}
			}	
		}
		return score;
	}
	,getGreenScore: function() {
		var score = 0;
		for ( var r = 0; r < 8; r++ ) {
			for( var c = 0; c < 8; c++ ){
				if ( this.MAP[ r ][ c ] == 'g' ) {
	   	 			score++;
				}
			}	
		}
		return score;
	}
	,getBlueScore: function() {
		var score = 0;
		for ( var r = 0; r < 8; r++ ) {
			for( var c = 0; c < 8; c++ ){
				if ( this.MAP[ r ][ c ] == 'b' ) {
	   	 			score++;
				}
			}	
		}
		return score;
	}
	,getPinkScore: function() {
		var score = 0;
		for ( var r = 0; r < 8; r++ ) {
			for( var c = 0; c < 8; c++ ){
				if ( this.MAP[ r ][ c ] == 'p' ) {
	   	 			score++;
				}
			}	
		}
		return score;
	}
	,getName: function( score ) {
		var name = [];
		var redScore = this.getRedScore();
		var greenScore = this.getGreenScore();
		var pinkScore = this.getPinkScore();
		var blueScore =  this.getBlueScore();
		if ( score == redScore ) { name.push( 'RED' ); }
		if ( score == greenScore ) { name.push( 'GREEN' ); }
		if ( score == pinkScore ) { name.push( 'PINK' ); }
		if ( score == blueScore ) {  name.push( 'BLUE' ); }
		return name;
	}
	,getRank: function() {
		var redScore = this.getRedScore();
		var greenScore = this.getGreenScore();
		var pinkScore = this.getPinkScore();
		var blueScore =  this.getBlueScore();
		var rank = [];
		var scoreArray = [ redScore, greenScore, pinkScore, blueScore ];
		scoreArray.sort( function ( a,b ){ return b - a } );

		for ( var i = 0; i < 4; i++ ) {
			if( scoreArray[ i ] == redScore ){
			 rank[i] = 'Red : ' + scoreArray[i];
			 redScore = -1;
			}
			else if( scoreArray[ i ] == greenScore ) { 
				rank[i] = 'Green : ' + scoreArray[i];
				greenScore = -1;
			} 
			else if( scoreArray[ i ] == pinkScore ) {
				rank[i] = 'Pink : ' + scoreArray[i]; 
				pinkScore = -1;
			}
			else if( scoreArray[ i ] == blueScore ) {
				rank[i] = 'Blue : ' + scoreArray[i]; 
				blueScore = -1;
			}
		}
		return rank;
	}
	,getWinner: function() {
		var winner = [];
		var string = '';
		var redScore = this.getRedScore();
		var greenScore = this.getGreenScore();
		var pinkScore = this.getPinkScore();
		var blueScore =  this.getBlueScore();
		var scoreArray = [ redScore, greenScore, pinkScore, blueScore ];
		scoreArray.sort( function( a,b ){ return b-a } );

		winner = this.getName( scoreArray[ 0 ] );
		string = winner[ 0 ];
		for( var i = 1; i < winner.length; i++ ){
			string += ' AND ';
			string += winner[ i ];
		}
		string += ' WIN !! '

		return string;
	}



})