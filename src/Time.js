var Time = cc.Sprite.extend({
	ctor: function() {
		this._super();
		this.init();

		//time
        this.time = Time.set.time;
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
		this.timeupScreen.init( 'images2/time/timeup.png' );
		this.timeupScreen.setPosition( new cc.p( 500, 300 ) );
		
	},

	isTimeUp: function() {
		if( this.time == -1 ) {
			return true;
		}
		else {
			return false;
		}
	},

	setTime: function() {
		this.time = Time.set.time;
		this.timeLabel2.setString( this.time );
	},

	stop: function() {
		this.timeLabel2.setFontFillColor( new cc.Color4B( 0, 0, 0, 0 ) );
		this.timeLabel2.setFontSize( 30 );
		this.unschedule( this.run );
	},

	start: function() {
		this.run();
		this.schedule( this.run, 1, Infinity, 0 );
	},

	run: function() {
		if( this.time <= 3 && this.time >= 1 ) {
			cc.AudioEngine.getInstance().playEffect( 'sounds/time2.mp3' );
			if( this.time % 2 != 0 ) {
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
        if( this.time < 0 ) {
        	this.timeLabel2.setString( this.time + 1 );
        	this.timeLabel2.setFontFillColor( new cc.Color4B( 0, 0, 0, 0 ) );
			this.timeLabel2.setFontSize( 30 );
			this.timeup();
            this.stop();
        }
	},

	timeup: function() {
		this.addChild( this.timeupScreen );
	},
	
	removeScreen: function() {
		this.removeChild( this.timeupScreen );
	}
});

Time.set = {
    time: 5
};
