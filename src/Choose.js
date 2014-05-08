var Choose = cc.Layer.extend({
    ctor : function(){
        this._super();

    },

    init: function() {
        this._super();

        this.setTouchEnabled( true );
        this.setTouchMode( 1 );

        var director = cc.Director.getInstance();
        var winsize = director.getWinSize();
        var centerpos = cc.p(winsize.width / 2, winsize.height / 2);

        var bg = cc.Sprite.create( 'images2/choose.png' );
        bg.setPosition( centerpos );

        this.addChild( bg );

        var color = cc.c3b( 255, 255, 255 );
        var textField = cc.LabelTTF.create( "GO!", "Arial", 50 );
        textField.setAnchorPoint( cc.p( 0.5, 0.5 ) );
        textField.setPosition( cc.p( 510, 273 ) );
        textField.setColor( color );
        textField.setOpacity( 0 );        
        textField.enableStroke( cc.c3b( 25, 25, 130 ), 2, true );

        var fadeIn = cc.FadeIn.create( 1.0 );
        var fadeOut = cc.FadeOut.create( 1.0 );
        var delay = cc.DelayTime.create( 0.5 );
        textField.runAction(cc.RepeatForever.create( cc.Sequence.create( fadeIn, delay, fadeOut ) ) );
        this.addChild( textField,300 );

        this.textFieldArr = [ [ new cc.LabelTTF.create( "PLAYER", "Arial", 40 ), false ], [ new cc.LabelTTF.create( "PLAYER", "Arial", 40 ), false ]
        , [ new cc.LabelTTF.create( "PLAYER", "Arial", 40 ), false ], [ new cc.LabelTTF.create( "PLAYER", "Arial", 40 ), false ] ];
        this.textFieldArr[ 0 ][ 0 ].setPosition( cc.p( 405, 540 ) );
        this.textFieldArr[ 1 ][ 0 ].setPosition( cc.p( 620, 540 ) );
        this.textFieldArr[ 2 ][ 0 ].setPosition( cc.p( 415, 50 ) );
        this.textFieldArr[ 3 ][ 0 ].setPosition( cc.p( 605, 50 ) );
        for( var i = 0; i < this.textFieldArr.length; i++ ) {
            this.textFieldArr[ i ][ 0 ].setColor( color );   
            this.textFieldArr[ i ][ 0 ].enableStroke( cc.c3b( 25, 25, 130 ), 2, true );
            this.addChild( this.textFieldArr[ i ][ 0 ] );
        }
    },

    onTouchBegan: function( touch, event ) {
        var bot = [];
        for ( var i = 0; i < this.textFieldArr.length; i++ ) {
            bot.push( this.textFieldArr[ i ][ 1 ] );
        }
        if( touch._point.x >= 440 && touch._point.x <= 570 && touch._point.y >= 250 && touch._point.y <= 307 ) { 
            this.onPlay( bot ); 
        }
        else if( touch._point.x < 500 && touch._point.y > 280 ) {
            if( this.textFieldArr[ 0 ][ 1 ] ) { 
                this.textFieldArr[ 0 ][ 1 ] = false;
                this.textFieldArr[ 0 ][ 0 ].setString( "PLAYER" );
            }
            else {
                this.textFieldArr[ 0 ][ 1 ] = true;
                this.textFieldArr[ 0 ][ 0 ].setString( "BOT" );
            }
        }
        else if( touch._point.x > 500 && touch._point.y > 280 ) {
            if( this.textFieldArr[ 1 ][ 1 ] ) { 
                this.textFieldArr[ 1 ][ 1 ] = false;
                this.textFieldArr[ 1 ][ 0 ].setString( "PLAYER" );
            }
            else {
                this.textFieldArr[ 1 ][ 1 ] = true;
                this.textFieldArr[ 1 ][ 0 ].setString( "BOT" );
            }
        }
        else if( touch._point.x < 500 && touch._point.y < 280 ) {
            if( this.textFieldArr[ 2 ][ 1 ] ) { 
                this.textFieldArr[ 2 ][ 1 ] = false;
                this.textFieldArr[ 2 ][ 0 ].setString( "PLAYER" );
            }
            else {
                this.textFieldArr[ 2 ][ 1 ] = true;
                this.textFieldArr[ 2 ][ 0 ].setString( "BOT" );
            }
        }
        else if( touch._point.x > 500 && touch._point.y < 280 ) {
            if( this.textFieldArr[ 3 ][ 1 ] ) { 
                this.textFieldArr[ 3 ][ 1 ] = false;
                this.textFieldArr[ 3 ][ 0 ].setString( "PLAYER" );
            }
            else {
                this.textFieldArr[ 3 ][ 1 ] = true;
                this.textFieldArr[ 3 ][ 0 ].setString( "BOT" );
            }
        }
    },

    onPlay: function( bot ) {
        var scene = GameLayer.scene( bot);
        cc.Director.getInstance().replaceScene( cc.TransitionFade.create( 1.5, scene ) );
    },
});

Choose.scene = function () {
    var scene = cc.Scene.create();
    var layer = new Choose();
    layer.init();
    scene.addChild( layer );
    return scene;
};

