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
        this.boxArray = new Array(8);
        for( var i = 0; i < 8; i++) {
        	this.boxArray[ i ] = new Array(8);
        }
        for( var i = 0; i < 8; i++ ) {
        	for( var j = 0; j < 8; j++ ){
        		this.boxArray[ i ][ j ] = new box(); 
        	}
        }
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
		this.boxArray[ x ][ y ].changeColor( color );
		/*if( color == 'green' ){
			this.MAP[ x ][ y ] = 'g';
		}
		else if( color == 'red' ){
			this.MAP[ x ][ y ] = 'r';
		}
		else if( color == 'blue' ){
			this.MAP[ x ][ y ] = 'b';
		}
		else if( color == 'pink' ){
			this.MAP[ x ][ y ] = 'p';
		}*/
		
	}
	/*,update: function() {
		for ( var r = 0; r < 8; r++ ) {
			for( var c = 0; c < 8; c++ ){
				if ( this.MAP[ r ][ c ] == 'g' ) {
	   	 			this.boxArray[ r ][ c ].changeColor( 'green' );
				}
				else if ( this.MAP[ r ][ c ] == 'r' ) {
	   	 			this.boxArray[ r ][ c ].changeColor( 'red' );
				}
			}	
		}
	}*/

})