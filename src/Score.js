var Score = cc.Sprite.extend({
	ctor: function( path, field ) {
		this._super();
		this.path = path;
		this.field = field;
		this.init( 'images2/rank/' + path + '-pro.png' );
		this.scoreLabel = cc.LabelTTF.create( '00', 'Arial', 30 );
		this.scoreLabel.setFontFillColor( this.getColor4B( path ) );
		this.scoreLabel.setPosition( cc.p( 120, 25 ) );
		this.addChild( this.scoreLabel );
	},

	setRank: function( rank ) {
		//this.setPosition( cc.p( 80, ( 590 - ( rank * 120 ) ) ) );
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

	updateScore: function() {
		this.scoreLabel.setString( this.getScore( this.path ) );
	},

	moveTo: function( position ) {
		var move = cc.MoveTo.create( 0.15, position );
		this.runAction( move );
	}
})
