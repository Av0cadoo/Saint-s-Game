var GameLayer = cc.LayerColor.extend({
    init: function() {
        this._super( new cc.Color4B( 45, 45, 45, 45 ) );
        this.setPosition( new cc.Point( 0, 0 ) );
        this.setKeyboardEnabled( true );
        this.scheduleUpdate();

        //field
        this.field = new field();
        this.addChild( this.field );

        //player
        this.player = new player( 'red' );
        this.addChild( this.player );

        //p2
        this.player2 = new player( 'green' );
        this.addChild( this.player2 );
        
        return true;
    }

    ,onKeyDown: function( e ) {
       switch( e ) {
        case 65:
            //left
            this.player.setDir( 3 );
            break;
        case 87:
            //up
            this.player.setDir( 1 );
            break;
        case 68:
            //right
            this.player.setDir( 4 );
            break;
        case 83:
            //down
            this.player.setDir( 2 );
            break;

        case 37:
            //left
            this.player2.setDir( 3 );
            break;
        case 38:
            //up
            this.player2.setDir( 1 );
            break;
        case 39:
            //right
            this.player2.setDir( 4 );
            break;
        case 40:
            //down
            this.player2.setDir( 2 );
            break;

        case 32:
            console.log(this.field.getRedScore());
       }


    }

    ,update: function() {
        this.field.changeMap( this.player.getX(), this.player.getY(), this.player.getColor() );
        this.field.changeMap( this.player2.getX(), this.player2.getY(), this.player2.getColor() );
        
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

