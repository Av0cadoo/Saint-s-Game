var moveSpeed = 0.3;
var speedBonusTime = 3;
var Player = cc.Sprite.extend({
	ctor: function( color, name ) {
		this._super();
		this.setAnchorPoint( cc.p( 0, 0 ) );
		this.dir;
		this.color = color;
		this.pos = this.getPosition();
		this.init( 'images2/player/' + name + '/1.png' );
		if( color == 'red' ) {
			this.setDir( Player.DIR.RIGHT );
			this.x = 0;
			this.y = 0;
		}
		else if( color == 'orange' ) {
			this.setDir( Player.DIR.DOWN );
			this.x = 0;
			this.y = 7;
		}	
		else if( color == 'green' ) {
			this.setDir( Player.DIR.UP );
			this.x = 7;
			this.y = 0;
		}
		else if( color == 'blue' ) {
			this.setDir( Player.DIR.LEFT );
			this.x = 7;
			this.y = 7;
		}
		this.updatePosition();
	},

	start: function() {
		this.schedule( this.move, moveSpeed, Infinity, 0 );
	},

	move: function() {
		switch( this.dir ) {
			case 1:
				if( this.x > 0 ) {
					cc.AudioEngine.getInstance().playEffect( 'sounds/poring.mp3' );
					this.x--;
				}
				break;
			case 2:
				if( this.x < 7 ) {
					cc.AudioEngine.getInstance().playEffect( 'sounds/poring.mp3' );
					this.x++;
				}
				break;
			case 3:
				if( this.y > 0 ) {
					cc.AudioEngine.getInstance().playEffect( 'sounds/poring.mp3' );
					this.y--;
				}
				break;
			case 4:
				if( this.y < 7 ) {
					cc.AudioEngine.getInstance().playEffect( 'sounds/poring.mp3' );
					this.y++;
				}
				break;
		}
		this.updatePosition();
	},

	updatePosition: function() {
		this.setPosition( new cc.p( ( 250 + this.y * 100 ), 563 - ( this.x * 75 ) ) );
	},


	setDir: function( dir ) {
		this.dir = dir;
		if( this.dir == 3 ) {
			this.setFlippedX( false );
		}
		else if( this.dir == 4 ) {
			this.setFlippedX( true );
		}
	},

	stop: function() {
		this.unschedule( this.move );
		this.unschedule( this.CountTime );
	},

	reset: function() {
		if( this.color == 'red' ) {
			this.setDir( Player.DIR.RIGHT );
			this.x = 0;
			this.y = 0;
		}
		else if( this.color == 'orange' ) {
			this.setDir( Player.DIR.DOWN );
			this.x = 0;
			this.y = 7;
		}
		else if( this.color == 'green' ) {
			this.setDir( Player.DIR.UP );
			this.x = 7;
			this.y = 0;
		}
		else if( this.color == 'blue' ) {
			this.setDir( Player.DIR.LEFT );
			this.x = 7;
			this.y = 7;
		}
		this.updatePosition();
	},

	getX: function() {
		return this.x;
	},

	getY: function() {
		return this.y;
	},

	getColor: function() {
		return this.color;
	},

	getColor4B: function() {
		if( this.color == 'red' ) return Player.COLOR.RED;
		if( this.color == 'orange' ) return Player.COLOR.ORANGE;
		if( this.color == 'green' ) return Player.COLOR.GREEN;
		if( this.color == 'blue' ) return Player.COLOR.BLUE;
	},

	setPower: function( type, field ) {
		if( type == Power.TYPE.FILL ) {
			if( this.x > 0 ) field.changeMap( this.x - 1, this.y, this.color );
			if( this.y > 0 ) field.changeMap( this.x, this.y - 1, this.color );
			if( this.y < 7 ) field.changeMap( this.x, this.y + 1, this.color );
			if( this.x < 7 ) field.changeMap( this.x + 1 , this.y, this.color );
			if( this.x > 0 && this.y > 0 ) field.changeMap( this.x - 1, this.y - 1, this.color );
			if( this.x > 0 && this.y < 7 ) field.changeMap( this.x - 1, this.y + 1, this.color );
			if( this.x < 7 && this.y > 0 ) field.changeMap( this.x + 1, this.y - 1, this.color );
			if( this.x < 7 && this.y < 7 ) field.changeMap( this.x + 1, this.y + 1, this.color );
		}
		else if( type == Power.TYPE.BLANK ) {
			if( this.x > 0 ) field.changeMap( this.x - 1, this.y, '#' );
			if( this.y > 0 ) field.changeMap( this.x, this.y - 1, '#' );
			if( this.y < 7 ) field.changeMap( this.x, this.y + 1, '#' );
			if( this.x < 7 ) field.changeMap( this.x + 1 , this.y, '#' );
			if( this.x > 0 && this.y > 0 ) field.changeMap( this.x - 1, this.y - 1, '#' );
			if( this.x > 0 && this.y < 7 ) field.changeMap( this.x - 1, this.y + 1, '#' );
			if( this.x < 7 && this.y > 0 ) field.changeMap( this.x + 1, this.y - 1, '#' );
			if( this.x < 7 && this.y < 7 ) field.changeMap( this.x + 1, this.y + 1, '#' );
		}
		else if( type == Power.TYPE.SPEEDUP ) {
			this.stop();
			this.schedule( this.move, moveSpeed - 0.15, Infinity, 0 );
			this.schedule( this.CountTime, 1, speedBonusTime + 1, 0 );
		}
		else if( type == Power.TYPE.SPEEDDOWN ) {
			this.stop();
			this.schedule( this.move, moveSpeed + 0.15, Infinity, 0 );
			this.schedule( this.CountTime, 1, speedBonusTime + 1, 0 );
		}
		else if( type == Power.TYPE.TRAP ) {
			this.stop();
			this.schedule( this.CountTime, 1, speedBonusTime + 1, 0 );
		}

	},

	CountTime: function() {
		speedBonusTime--;
		if( speedBonusTime == 0 ) {
			this.stop();
			this.start();
			speedBonusTime = 3;
		}
	},
	
});

Player.COLOR = {
    RED: new cc.Color4B( 232, 91, 85, 0 ),
    ORANGE: new cc.Color4B( 255, 187, 102, 0 ),
    GREEN: new cc.Color4B( 114, 232, 122, 0 ),
    BLUE: new cc.Color4B( 85, 201, 244, 0 )
};

Player.DIR = {
	UP: 1,
	DOWN: 2,
	LEFT: 3,
	RIGHT: 4
};