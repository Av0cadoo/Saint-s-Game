var RankStat = cc.Sprite.extend({
	ctor: function( field ) {
		this._super();
		this.field = field;
		var director = cc.Director.getInstance();
        var winsize = director.getWinSize();
        var pos = cc.p( winsize.width / 2, winsize.height / 1.15 );
		this.red = new Score( 'p1', field );
		this.orange = new Score( 'p2', field );
		this.green = new Score( 'p3', field );
		this.blue = new Score( 'p4', field );
		this.Label = cc.LabelTTF.create( '~ THE WINNER :', 'Arial', 60 );
        this.Label.setFontFillColor( new cc.Color4B( 0, 0, 0, 0 ) );
        this.Label.setPosition( pos );
        this.Label.enableStroke( cc.c4b( 247, 245, 0 ), 3, true);
		this.addChild( this.red );
		this.addChild( this.orange );
		this.addChild( this.green );
		this.addChild( this.blue );
		this.red.start( this.field.getRedRank() );
		this.orange.start( this.field.getOrangeRank() );
		this.green.start( this.field.getGreenRank() );
		this.blue.start( this.field.getBlueRank() );
	},

	update: function() {
		this.red.setRank( this.field.getRedRank() );
		this.orange.setRank( this.field.getOrangeRank() );
		this.green.setRank( this.field.getGreenRank() );
		this.blue.setRank( this.field.getBlueRank() );
	},

	start: function() {
		this.schedule( this.update, 0.15, Infinity, 0 );
	},

	stop: function() {
		this.unschedule( this.update );
		this.red.start( this.field.getRedRank() );
		this.orange.start( this.field.getOrangeRank() );
		this.green.start( this.field.getGreenRank() );
		this.blue.start( this.field.getBlueRank() );
	},

	reset: function() {
		var scoreArr = [ this.red, this.orange, this.green, this.blue ];
		for( var i = 0; i < scoreArr.length; i++ ) {
			scoreArr[ i ].resetScore();
			scoreArr[ i ].start( i + 1 );
		}
		this.stop();
		this.removeChild( this.Label );
	},

	showWinner: function() {
		var rank = [ [ this.red, this.red.getRank() ], [ this.orange, this.orange.getRank() ], [ this.green, this.green.getRank() ],
		 		   [ this.blue, this.blue.getRank() ] ];
		rank.sort( function( a, b ) { return a[ 1 ] - b[ 1 ] } );
		for( var i = 0; i < this.field.getWinnerNumber(); i++ ) {
			rank[ i ][ 0 ].win( i );
		}
		this.addChild( this.Label );
	}

})
