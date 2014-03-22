var player = cc.Sprite.extend({
	ctor: function( color ) {
		this._super();
		this.setAnchorPoint( cc.p( 0, 0 ) );
		//this.setPosition( cc.p( 250, 565 ) ); //leftup
		//this.setPosition( cc.p( 250, 40 ) ); //leftdown
		//this.setPosition( cc.p( 950, 565 ) ); //rightup
		//this.setPosition( cc.p( 950, 40 ) );//rightdown


		if( color == 'red' ) {
			this.initWithFile('images/blue-mushroom.png', cc.rect(0, 0, 160/3, 53.75));
			this.setPosition( cc.p( 250, 40 ) );
			this.x = 7;
			this.dir = 4;
			this.y = 0;
		}
		else {
			this.initWithFile('images/blue-mushroom.png', cc.rect(160/3, 0, 160/3, 53.75));
			this.setPosition( cc.p( 250, 565 ) );
			this.x = 0;
			this.dir = 4;
			this.y = 0;
		}
		this.color = color;
		this.pos = this.getPosition();

	}
	,move: function() {
		switch( this.dir ) {
			case 1:
				if( this.x > 0 ) {
					this.setPosition( new cc.Point( this.pos.x , this.pos.y + 75 ));
					this.x--;
				}
				break;
			case 2:
				if( this.x < 7 ) {
					this.setPosition( new cc.Point( this.pos.x , this.pos.y - 75 ));
					this.x++;
				}
				break;
			case 3:
				
				if( this.y > 0 ) {
					this.setPosition( new cc.Point( this.pos.x - 100, this.pos.y ));
					this.y--;
				}
				break;
			case 4:
				if( this.y < 7 ) {
					this.setPosition( new cc.Point( this.pos.x + 100, this.pos.y ));
					this.y++;
				}
				break;
		}
	}
	,setDir: function( dir ) {
		this.dir = dir;
		if( this.dir == 3 ) {
			this.setFlippedX(false);
		}
		else if( this.dir == 4 ) {
			this.setFlippedX(true);
		}
	}
	,stop: function() {
		this.unschedule( this.move );
	}
	,reset: function() {
		if( this.color == 'red' ) {
			this.setPosition( cc.p( 250, 40 ) );
			this.x = 7;
			this.y = 0;
			this.dir = 4;
		}
		else {
			this.setPosition( cc.p( 250, 565 ) );
			this.x = 0;
			this.y = 0;
			this.dir = 4;
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