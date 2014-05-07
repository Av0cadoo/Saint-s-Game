var Score = cc.Sprite.extend({
	ctor: function( path, field ) {
		this._super();
		this.path = path;
		this.field = field;
		this.init( 'images2/rank/' + path + '-pro.png' );
		this.scoreLabel = cc.LabelTTF.create( '0', 'Arial', 30 );
		this.scoreLabel.setFontFillColor( this.getColor4B( path ) );
		this.scoreLabel.enableStroke( cc.c4b( 0, 0, 0 ), 1, true);
		this.scoreLabel.setPosition( cc.p( 120, 25 ) );
		this.addChild( this.scoreLabel );
		this.rank = 0;
	},

	setRank: function( rank ) {
		this.rank = rank;
		this.moveTo( cc.p( 80, ( 590 - ( rank * 120 ) ) ) );
		this.updateScore();
	},

	start: function( rank ) {
		this.setPosition( cc.p( 80, ( 590 - ( rank * 120 ) ) ) );
	},

	getColor4B: function( name ) {
		if( name == 'p1' ) return Player.COLOR.RED;
		else if( name == 'p2' ) return Player.COLOR.ORANGE;
		else if( name == 'p3' ) return Player.COLOR.GREEN;
		else if( name == 'p4' ) return Player.COLOR.BLUE;
	},
	
	getScore: function( name ) {
		if( name == 'p1' ) return this.field.getRedScore();
		else if( name == 'p2' ) return this.field.getOrangeScore();
		else if( name == 'p3' ) return this.field.getGreenScore();
		else if( name == 'p4' ) return this.field.getBlueScore();
	},

	resetScore: function() {
		this.scoreLabel.setString( '0' );
	},

	updateScore: function() {
		this.scoreLabel.setString( this.getScore( this.path ) );
	},

	moveTo: function( position ) {
		var move = cc.MoveTo.create( 0.15, position );
		this.runAction( move );
	},

	getRank: function() {
		return this.rank;
	},
	
	win: function( i ) {
		var director = cc.Director.getInstance();
        var winsize = director.getWinSize();
        var pos = cc.p( ( 150 * i ) + ( winsize.width / 4 ), winsize.height / 1.4 );
		var move = cc.MoveTo.create( 0.15, pos );
		this.runAction( move );
	},
})
