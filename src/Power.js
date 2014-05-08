var Power = cc.Sprite.extend({
	ctor: function() {
		this._super();
		this.initWithFile( 'images2/power/power.png', cc.rect( 260, 0, 40, 40 ) );
		this.type;
		this.x;
		this.y;
	},

	update: function( p1, p2, p3, p4 ) {
		if( p1.getX() == this.x && p1.getY() == this.y ) {
			cc.AudioEngine.getInstance().playEffect( 'sounds/Cure.wav' );
			this.hide();
			return [ "p1", this.type ];
		}
		if( p2.getX() == this.x && p2.getY() == this.y ) {
			cc.AudioEngine.getInstance().playEffect( 'sounds/Cure.wav' );
			this.hide();
			return [ "p2", this.type ];
		}
		if( p3.getX() == this.x && p3.getY() == this.y ) {
			cc.AudioEngine.getInstance().playEffect( 'sounds/Cure.wav' );
			this.hide();
			return [ "p3", this.type ];
		}
		if( p4.getX() == this.x && p4.getY() == this.y ) {
			cc.AudioEngine.getInstance().playEffect( 'sounds/Cure.wav' );
			this.hide();
			return [ "p4", this.type ];
		}
		return -1;
	},

	randomP: function() {
		this.x = this.rand( 0, 7 );
		this.y = this.rand( 0, 7 );
		this.type = this.rand( 0, 4 );
		this.updatePosition();
	
	},

	hide: function() {
		this.setTextureRect( cc.rect( 260, 0, 40, 40 ) );
		this.x = -1;
		this.y = -1;
	},

	updatePosition: function() {
		if( this.type == Power.TYPE.FILL ) this.setTextureRect( cc.rect( 0, 0, 40, 40 ) );
		if( this.type == Power.TYPE.BLANK ) this.setTextureRect( cc.rect( 40, 0, 40, 40 ) );
		if( this.type == Power.TYPE.SPEEDUP ) this.setTextureRect( cc.rect( 80, 0, 40, 40 ) );
		if( this.type == Power.TYPE.SPEEDDOWN ) this.setTextureRect( cc.rect( 120, 0, 40, 40 ) );
		if( this.type == Power.TYPE.TRAP ) this.setTextureRect( cc.rect( 160, 0, 40, 40 ) );

		this.setPosition( new cc.p( 250 + ( this.y * 100 ), 565 - ( this.x * 75 ) ) );
	},

	roll: function() {
		if ( this.rand( 1, 2 ) == 1 ) {
			this.randomP();
		}
	},

	stop: function() {
		this.hide();
		this.unschedule( this.roll );
	},

	start: function() {
		this.schedule( this.roll, 3, Infinity, 1 );
	},

	rand: function( lo, hi ) {
		return parseInt( ( Math.random() * ( hi - lo + 1 ) ) + lo, 10 );
	}
	
});

Power.TYPE = {
	FILL: 0,
	BLANK: 1,
	SPEEDUP: 2,
	SPEEDDOWN: 3,
	TRAP: 4
};
