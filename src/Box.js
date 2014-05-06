var Box = cc.Sprite.extend({
	ctor: function() {
		this._super();
		this.initWithFile( 'images2/box/box.png', cc.rect( 0, 0, 100, 75 ) );
	},

	changeColor: function( color ) {
		if( color == 'red' ) {
			this.setTextureRect( cc.rect( 100, 0, 100, 75 ) );
		}
		else if( color == 'green' ) {
			this.setTextureRect( cc.rect( 200, 0, 100, 75 ) );
		}
		else if( color == 'blue' ) {
			this.setTextureRect( cc.rect( 300, 0, 100, 75 ) );
		}
		else if( color == 'orange' ) {
			this.setTextureRect( cc.rect( 400, 0, 100, 75 ) );
		}
		else if( color == '#' ) {
			this.setTextureRect( cc.rect( 0, 0, 100, 75 ) );
		}
	}

})
