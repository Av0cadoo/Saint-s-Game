var player = cc.Sprite.extend({
	ctor: function() {
		this._super();
		this.setAnchorPoint( cc.p( 0, 0 ) );
		this.setPosition( cc.p( 250, 565 ) );
		this.initWithFile( 'images/green-player.png' );
		this.color = "green";
		this.v = 50;
		this.direction = -2;
		this.x = 0;
		this.y = 0;
		this.pos = this.getPosition();
	}
	,update: function( dt ) {
		this.x = 1;
		this.y = 1;
	}
	,switchDirection: function( dir ) {
		if ( this.pos.y > screenHeight || this.pos.y < 0 || this.pos.x > screenWidth || this.pos.x < 200 ) {
			this.v = 5;
			this.setPosition( new cc.Point( 200, 525 ) );
		}
    	this.direction = dir;
	}

	,getX: function() {
		return this.x;
	}
	,getY: function() {
		return this.y;
	}
	,getColor: function() {
		return this.color;
	}
})