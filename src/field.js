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
		for ( var r = 0; r < 8; r++ ) {
	   		for ( var c = 0; c < 8; c++ ) {
				if ( this.MAP[ r ][ c ] == '#' ) {
		    		var s = new box();
		   	 		s.setAnchorPoint( cc.p( 0, 0 ) );
		    		s.setPosition( cc.p( 200 + c * this.WIDTH, 525 - r * this.HEIGHT ) );
		    		this.addChild( s );
				}
	    	}
		}

	}
})