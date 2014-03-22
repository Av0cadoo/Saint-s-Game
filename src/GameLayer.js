var GameLayer = cc.LayerColor.extend({
    init: function() {
        this._super( new cc.Color4B( 45, 45, 45, 45 ) );
        this.setPosition( new cc.Point( 0, 0 ) );
        this.setKeyboardEnabled( true );
        this.scheduleUpdate();
        this.schedule(this.timeUpdate, 1, Infinity, 0);

        //field
        this.field = new field();
        this.addChild( this.field );

        //time
        this.time = 5;
        this.scoreLabel = cc.LabelTTF.create( 'TIME :', 'Arial', 30 );
        this.scoreLabel.setPosition( new cc.Point( 70, 550 ) );
        this.addChild( this.scoreLabel );
        this.scoreLabel2 = cc.LabelTTF.create( this.time, 'Arial', 30 );
        this.scoreLabel2.setPosition( new cc.Point( 140, 550 ) );
        this.addChild( this.scoreLabel2 );

        //player
        this.player = new player( 'red' );
        this.addChild( this.player );

        //player2
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
        case 68:                                                   //w a s d
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
        case 39:                                                   // arrow key
            //right
            this.player2.setDir( 4 );
            break;
        case 40:
            //down
            this.player2.setDir( 2 );
            break;

        case 32:
            this.playAgain();
       }


    }

    ,update: function() {
        this.field.changeMap( this.player.getX(), this.player.getY(), this.player.getColor() );
        this.field.changeMap( this.player2.getX(), this.player2.getY(), this.player2.getColor() );
        
    }
    ,timeUpdate: function() {
        if( this.time >0 ){
            this.time--;
        }
        if( this.time === 0 ) {
            this.player.stop();
            this.player2.stop();
            this.showRank();
            this.time = '0';
        }
        this.scoreLabel2.setString(this.time);
    }
    ,playAgain: function() {
        this.time = 5;
        this.field.reset();
        this.player.reset();
        this.player2.reset();
    }
    ,showRank: function() {
        for( var i = 0; i < 4; i++ ){
            console.log( ( i+1 ) + '. ' + this.field.getRank()[ i ] );
        }
        console.log( '\n' + this.field.getWinner() );
        
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

