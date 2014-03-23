var GameLayer = cc.LayerColor.extend({
    init: function() {
        this._super( new cc.Color4B( 136, 136, 136, 255 ) );
        this.setPosition( new cc.Point( 0, 0 ) );
        this.setKeyboardEnabled( true );
        this.isStop = true;

        //field
        this.field = new field();
        this.addChild( this.field );

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

        //player
        this.player1 = new player( 'red' );
        this.addChild( this.player1 );

        //player2
        this.player2 = new player( 'orange' );
        this.addChild( this.player2 );

        //player3
        this.player3 = new player( 'green' );
        this.addChild( this.player3 );

        //player4
        this.player4 = new player( 'blue' );
        this.addChild( this.player4 );
        
        return true;
    }

    ,onKeyDown: function( e ) {
        if( e == 32 ) { this.playAgain(); }
        if( e == 13 ) { this.startGame(); }
        if( this.isStop == true ) { return; }
        switch( e ) {
        case 65:
            //left
            this.player1.setDir( 3 );
            break;
        case 87:
            //up
            this.player1.setDir( 1 );
            break;
        case 68:                                                   //w a s d
            //right
            this.player1.setDir( 4 );
            break;
        case 83:
            //down
            this.player1.setDir( 2 );
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
        default:
            console.log(e);
       }


    }

    ,update: function() {
        this.field.changeMap( this.player1.getX(), this.player1.getY(), this.player1.getColor() );
        this.field.changeMap( this.player2.getX(), this.player2.getY(), this.player2.getColor() );
        this.field.changeMap( this.player3.getX(), this.player3.getY(), this.player3.getColor() );
        this.field.changeMap( this.player4.getX(), this.player4.getY(), this.player4.getColor() );
        
    }
    ,timeUpdate: function() {
        if( this.time >= 0 ){
            this.time--;
            if( this.time >= 0 ) { 
                this.timeLabel2.setString( this.time );
            }
        }
        if( this.time < 0 ) {
            this.stopGame();
            alert( "time's up ~" );
            this.showRank();
            alert( "=======================================\nPress spacebar to play again.\n=======================================" );
        }
        
    }
    ,stopGame: function() {
        this.player1.stop();
        this.player2.stop();
        this.player3.stop();
        this.player4.stop();
        this.unschedule( this.timeUpdate );
        this.isStop = true;
    }
    ,startGame: function() {
        if( this.time != 15 ) { return; }
        this.isStop = false;
        this.player1.schedule( this.player1.move, 0.4, Infinity, 0 );
        this.player2.schedule( this.player2.move, 0.4, Infinity, 0 );
        this.player3.schedule( this.player3.move, 0.4, Infinity, 0 );
        this.player4.schedule( this.player4.move, 0.4, Infinity, 0 );
        this.scheduleUpdate();
        this.schedule( this.timeUpdate, 1, Infinity, 0 );
    }
    ,playAgain: function() {
        this.stopGame();
        this.time = 15;
        this.timeLabel2.setString( this.time );
        this.field.reset();
        this.player1.reset();
        this.player2.reset();
        this.player3.reset();
        this.player4.reset();
    }
    ,showRank: function() {
        var temp = '======= RANK =======\n';
        for( var i = 0; i < 4; i++ ){
            temp += ( i+1 ) + '. ' + this.field.getRank()[ i ] + '\n';
        }
        temp += '========================\n' + this.field.getWinner() + '\n========================';
        alert(temp);
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

