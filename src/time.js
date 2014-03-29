var time = cc.Sprite.extend({
	ctor: function() {
		this._super();
		this.init();
		//this.init( 'images2/timeup.png' );
		//this.setPosition( cc.p( 500,300 ) );
		//time
        this.time = 15;
        this.timeLabel = cc.LabelTTF.create( 'TIME :', 'Arial', 30 );
        this.timeLabel.setFontFillColor( new cc.Color4B( 0, 0, 0, 0 ) );
        this.timeLabel.setPosition( new cc.Point( 70, 550 ) );
        this.addChild( this.timeLabel );
        this.timeLabel2 = cc.LabelTTF.create( this.time, 'Arial', 30 );
        this.timeLabel2.setFontFillColor( new cc.Color4B( 0, 0, 0, 0 ) );
        this.timeLabel2.setPosition( new cc.Point( 140, 550 ) );
        this.addChild( this.timeLabel2 );

        //screen
        this.timeupScreen = new cc.Sprite;
		this.timeupScreen.init( 'images2/timeup.png' );
		this.timeupScreen.setPosition( new cc.p( 500, 300 ) );

		
	}
	,isTimeUp: function() {
		if( this.time == 0 ) {
			return true;
		}
		else {
			return false;
		}
	}
	,setTime: function( time ) {
		this.time = time;
		this.timeLabel2.setString( this.time );
	}
	,stop: function() {
		this.unschedule( this.run );
	}
	,start: function() {
		this.time = 15;
		this.schedule( this.run, 1, Infinity, 0 );
	}
	,run: function() {
		if( this.time <= 6 && this.time >= 1 ) {
			cc.AudioEngine.getInstance().playEffect( 'sounds/time1.mp3' );
			if( this.time % 2 == 0 ) {
				this.timeLabel2.setFontFillColor( new cc.Color4B( 255, 0, 0, 0 ) );
				this.timeLabel2.setFontSize( 40 );
			}
			else {
				this.timeLabel2.setFontFillColor( new cc.Color4B( 0, 0, 0, 0 ) );
				this.timeLabel2.setFontSize( 20 );
			}
		}
		if( this.time >= 0 ){
            this.timeLabel2.setString( this.time );
            this.time--;
        }
        if( this.time == 0 ) {
        	this.timeLabel2.setString( this.time );
        	this.timeLabel2.setFontFillColor( new cc.Color4B( 0, 0, 0, 0 ) );
			this.timeLabel2.setFontSize( 30 );
			this.timeup();
            this.stop();
        }
	}
	,timeup: function() {
		this.addChild( this.timeupScreen );
	}
	,removeScreen: function() {
		this.removeChild( this.timeupScreen );
	}
})
