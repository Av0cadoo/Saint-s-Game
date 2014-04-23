var RankStat = cc.Sprite.extend({
	ctor: function( field ) {
		this._super();
		this.init( 'images2/player/pro-pic.png' );
		this.setPosition( new cc.p( 80, 300 ) );
		this.field = field;
		//red
		this.redScoreLabel = cc.LabelTTF.create( '', 'Arial', 30 );
        this.redScoreLabel.setFontFillColor( new cc.Color4B( 232, 91, 85, 0 ) );
        this.redScoreLabel.setPosition( new cc.Point( 120, 310 ) );
		this.addChild( this.redScoreLabel );
		//orange
		this.orangeScoreLabel = cc.LabelTTF.create( '', 'Arial', 30 );
        this.orangeScoreLabel.setFontFillColor( new cc.Color4B( 255, 187, 102, 0 ) );
        this.orangeScoreLabel.setPosition( new cc.Point( 120, 219 ) );
		this.addChild( this.orangeScoreLabel );
		//green
		this.greenScoreLabel = cc.LabelTTF.create( '', 'Arial', 30 );
        this.greenScoreLabel.setFontFillColor( new cc.Color4B( 114, 232, 122, 0 ) );
        this.greenScoreLabel.setPosition( new cc.Point( 120, 124 ) );
		this.addChild( this.greenScoreLabel );
		//blue
		this.blueScoreLabel = cc.LabelTTF.create( '', 'Arial', 30 );
        this.blueScoreLabel.setFontFillColor( new cc.Color4B( 85, 201, 244, 0 ) );
        this.blueScoreLabel.setPosition( new cc.Point( 120, 29 ) );
		this.addChild( this.blueScoreLabel );

		this.schedule(this.update, 0.2, Infinity, 0); 

	}
	,update: function() {
		this.redScoreLabel.setString( this.field.getRedScore() );
		this.orangeScoreLabel.setString( this.field.getOrangeScore() );
		this.greenScoreLabel.setString( this.field.getGreenScore() );
		this.blueScoreLabel.setString( this.field.getBlueScore() );
	}

	
})
