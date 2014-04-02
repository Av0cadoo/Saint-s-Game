var Player = cc.Sprite.extend({
	ctor: function( color ) {
		this._super();
		this.setAnchorPoint( cc.p( 0, 0 ) );
		//this.setPosition( cc.p( 250, 565 ) ); //leftup
		//this.setPosition( cc.p( 250, 40 ) ); //leftdown
		//this.setPosition( cc.p( 950, 565 ) ); //rightup
		//this.setPosition( cc.p( 950, 40 ) );//rightdown
		this.dir;
		this.color = color;
		this.pos = this.getPosition();
		this.createAnimation();

		if( color == 'red' ) {
			this.init( 'images2/player/poring/1.png' );
			this.setPosition( cc.p( 250, 565 ) );
			this.x = 0;
			this.setDir( 4 );
			this.y = 0;
		}
		else if( color == 'orange' ) {
			this.init( 'images2/player/drop/1.png' );
			this.setPosition( cc.p( 950, 565 ) );
			this.x = 0;
			this.setDir( 2 );
			this.y = 7;
		}
		else if( color == 'green' ) {
			this.init( 'images2/player/poporing/1.png' );
			this.setPosition( cc.p( 250, 40 ) );
			this.x = 7;
			this.setDir( 1 );
			this.y = 0;
		}
		else if( color == 'blue' ) {
			this.init( 'images2/player/marin/1.png' );
			this.setPosition( cc.p( 950, 40 ) );
			this.x = 7;
			this.setDir( 3 );
			this.y = 7;
		}
	}
	,createAnimation: function() {
		this.animationFront = new cc.Animation.create();
		this.animationBack = new cc.Animation.create();
		var name = '';
		if( this.color == 'red' ) { name = 'poring'; }
		else if( this.color == 'green' ) { name = 'poporing'; }
		else if( this.color == 'orange' ) { name = 'drop'; }
		else if( this.color == 'blue' ) { name = 'marin'; }
		for( var i = 1; i < 17; i++ ) {
			if( i <= 8 ) {
				this.animationFront.addSpriteFrameWithFile( 'images2/player/' + name + '/' + i + '.png' );
			}
			else {
				this.animationBack.addSpriteFrameWithFile( 'images2/player/' + name + '/' + i + '.png' );
			}
		}
		this.animationFront.setDelayPerUnit( 0.125 );
		this.animationBack.setDelayPerUnit( 0.125 );
		this.movingAction = cc.Animate.create( this.animationFront ); 

	}
	,move: function() {
		this.runAction( this.movingAction );
		switch( this.dir ) {
			case 1:
				if( this.x > 0 ) {
					this.setPosition( new cc.Point( this.pos.x , this.pos.y + 75 ));
					cc.AudioEngine.getInstance().playEffect( 'sounds/poring.mp3' );
					this.x--;
				}
				break;
			case 2:
				if( this.x < 7 ) {
					this.setPosition( new cc.Point( this.pos.x , this.pos.y - 75 ));
					cc.AudioEngine.getInstance().playEffect( 'sounds/poring.mp3' );
					this.x++;
				}
				break;
			case 3:
				if( this.y > 0 ) {
					this.setPosition( new cc.Point( this.pos.x - 100, this.pos.y ));
					cc.AudioEngine.getInstance().playEffect( 'sounds/poring.mp3' );
					this.y--;
				}
				break;
			case 4:
				if( this.y < 7 ) {
					this.setPosition( new cc.Point( this.pos.x + 100, this.pos.y ));
					cc.AudioEngine.getInstance().playEffect( 'sounds/poring.mp3' );
					this.y++;
				}
				break;
		}
	}
	,setDir: function( dir ) {
		this.dir = dir;
		if( this.dir == 1 ) {
			this.movingAction = cc.Animate.create( this.animationBack );
		}
		else if( this.dir == 2 ) {
			this.movingAction = cc.Animate.create( this.animationFront );
		}

		if( this.dir == 3 ) {
			this.setFlippedX( false );
		}
		else if( this.dir == 4 ) {
			this.setFlippedX( true );
		}
	}
	,stop: function() {
		this.unschedule( this.move );
	}
	,reset: function() {
		if( this.color == 'red' ) {
			this.setPosition( cc.p( 250, 565 ) );
			this.x = 0;
			this.dir = 4;
			this.y = 0;
		}
		if( this.color == 'green' ) {
			this.setPosition( cc.p( 250, 40 ) );
			this.x = 7;
			this.dir = 1;
			this.y = 0;
		}
		if( this.color == 'blue' ) {
			this.setPosition( cc.p( 950, 40 ) );
			this.x = 7;
			this.dir = 3;
			this.y = 7;
		}
		if( this.color == 'orange' ) {
			this.setPosition( cc.p( 950, 565 ) );
			this.x = 0;
			this.dir = 2;
			this.y = 7;
		}
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
