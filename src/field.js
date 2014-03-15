var field = cc.Node.extend({
	ctor: function() {
		this._super();
		this.WIDTH = 100;
		this.HEIGHT = 75;
        this.MAP = [
            '########',
            '########',
            '########',
            '########',
            '########',
            '########',
            '########',
            '########'
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
				if ( this.MAP[ r ][ c ] == '#' ) {
	   	 			this.boxArray[ r ][ c ].setAnchorPoint( cc.p( 0, 0 ) );
	    			this.boxArray[ r ][ c ].setPosition( cc.p( 200 + c * this.WIDTH, 525 - r * this.HEIGHT ) );
	    			this.addChild( this.boxArray[ r ][ c ] );
				}
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


})