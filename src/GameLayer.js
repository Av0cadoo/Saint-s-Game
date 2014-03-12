var GameLayer = cc.LayerColor.extend({
    init: function() {
        this._super( new cc.Color4B( 45, 45, 45, 45 ) );
        this.setPosition( new cc.Point( 0, 0 ) );
        this.setKeyboardEnabled( true );
        this.scheduleUpdate();
        this.scoreLabel = cc.LabelTTF.create( '0', 'Arial', 40 );
        this.scoreLabel.setPosition( new cc.Point( 750, 550 ) );
        this.addChild( this.scoreLabel );
        
        return true;
    }

    ,onKeyDown: function( e ) {
        
       
    }

    ,update: function() {
        
        
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

