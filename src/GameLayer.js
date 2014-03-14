var GameLayer = cc.LayerColor.extend({
    init: function() {
        this._super( new cc.Color4B( 45, 45, 45, 45 ) );
        this.setPosition( new cc.Point( 0, 0 ) );
        this.setKeyboardEnabled( true );
        this.scheduleUpdate();
        this.scoreLabel = cc.LabelTTF.create( '0', 'Arial', 40 );
        this.scoreLabel.setPosition( new cc.Point( 10, 570 ) );
        this.addChild( this.scoreLabel );
        this.field = new field();
        this.addChild( this.field );
        this.field.scheduleUpdate();
        this.player = new player();
        this.addChild( this.player );
        this.player.scheduleUpdate();
        
        return true;
    }

    ,onKeyDown: function( e ) {
        if( e == cc.KEY.w ) {
            this.player.switchDirection( -1 );
            console.log(this.field.children);
        }
        else if( e == cc.KEY.d ) {
            this.player.switchDirection( -2 );
        }
        else if( e == cc.KEY.a ) {
            this.player.switchDirection( -3 );

        }
        else if( e == cc.KEY.s ) {
            this.player.switchDirection( -4 );
        }       
       
    }

    ,update: function() {
        this.field.changeMap( this.player.getX(), this.player.getY(), this.player.getColor() );
        
    }
    
});

var StartScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        var layer = new GameLayer();
        layer.init();
        this.addChild( layer );
    }
});

