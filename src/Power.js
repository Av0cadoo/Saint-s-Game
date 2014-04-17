var Power = cc.Sprite.extend({
	ctor: function() {
		this._super();
		this.initWithFile( 'images2/power.png', cc.rect( 33, 0, 32, 32 ) );
		this.type;
		this.x;
		this.y;
	}

	,update: function( p1, p2, p3, p4 ) {
		if( p1.getX() == this.x && p1.getY() == this.y ) {
			this.hide();
			return [ "p1", this.type ];
		}
		if( p2.getX() == this.x && p2.getY() == this.y ) {
			this.hide();
			return [ "p2", this.type ];
		}
		if( p3.getX() == this.x && p3.getY() == this.y ) {
			this.hide();
			return [ "p3", this.type ];
		}
		if( p4.getX() == this.x && p4.getY() == this.y ) {
			this.hide();
			return [ "p4", this.type ];
		}
		return -1;
	}

	,randomP: function() {
		this.x = Math.floor( ( Math.random() * 8 ) );
		this.y = Math.floor(  ( Math.random() * 8 ) );
		this.type = Math.floor( ( Math.random() * 3 ) );
		this.updatePosition();
	
	}

	,hide: function() {
		this.setTextureRect( cc.rect( 33, 0, 32, 32 ) );
		this.x = -1;
		this.y = -1;
	}

	,updatePosition: function() {
		this.setTextureRect( cc.rect( 0, 0, 32, 32 ) );
		this.setPosition( new cc.p( 250 + ( this.y * 100 ), 565 - ( this.x * 75 ) ) );
	}

	,roll: function() {
		if ( Math.floor( ( Math.random() * 2 ) ) == 1 ) {
			this.randomP();
		}
	}

	,stop: function() {
		this.hide();
		this.unschedule( this.roll );
	}

	,start: function() {
		this.schedule( this.roll, 4, Infinity, 0.5 );
	}

})
