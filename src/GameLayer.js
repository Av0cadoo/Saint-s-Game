var GameLayer = cc.LayerColor.extend({
    init: function() {
        this._super( new cc.Color4B( 136, 136, 136, 255 ) );
        this.setPosition( new cc.Point( 0, 0 ) );
        this.setKeyboardEnabled( true );
        this.isMusicPlaying = true;
        this.bgm = new cc.SimpleAudioEngine();
        this.bgm.init();
        this.bgm.playMusic( 'sounds/18.mp3', true );
        this.bgm.setMusicVolume( 0.7 );
        this.isGameStop = true;
        this.isReset = true;

        //field
        this.field = new Field();
        this.addChild( this.field );

        //rank
        this.rank = new RankStat( this.field );
        this.addChild( this.rank );
        this.rank.scheduleUpdate();

        //player
        this.player1 = new Player( 'red' );
        this.addChild( this.player1 );

        //player2
        this.player2 = new Player( 'orange' );
        this.addChild( this.player2 );

        //player3
        this.player3 = new Player( 'green' );
        this.addChild( this.player3 );

        //player4
        this.player4 = new Player( 'blue' );
        this.addChild( this.player4 );
        
        //time
        this.timeEvent = new Time();
        this.time = Time.set.time;
        this.addChild( this.timeEvent );

        return true;
    }
    ,BGM: function() {
        if ( this.isMusicPlaying == true ) {
            this.bgm.stopMusic();
            this.isMusicPlaying = false;
        }
        else  {
            this.bgm.playMusic( 'sounds/18.mp3', true );
            this.isMusicPlaying = true;
        }
    }
    ,onKeyDown: function( e ) {
        if( e == 32 ) { this.playAgain(); }
        if( e == 13 ) { this.startGame(); }
        if( e == 81 ) { this.BGM(); }
        if( this.isGameStop ) { return; }
        switch( e ) {
        case 87:
            //up
            this.player1.setDir( 1 );
            break;
        case 83:
            //down
            this.player1.setDir( 2 );
            break;
        case 65:
            //left
            this.player1.setDir( 3 );
            break;
        case 68:                                                   //w a s d
            //right
            this.player1.setDir( 4 );
            break;        
//////////////////////////////////////////////////////////////////////////////////////////////////////////
        case 80:
            //up
            this.player2.setDir( 1 );
            break;
        case 59:
            //down
            this.player2.setDir( 2 );
            break;
        case 76:
            //left
            this.player2.setDir( 3 );
            break;
        case 222:                                                   // p ; l '
            //right
            this.player2.setDir( 4 );
            break;
//////////////////////////////////////////////////////////////////////////////////////////////////////////
        case 89:
            //up
            this.player3.setDir( 1 );
            break;
        case 72:
            //down
            this.player3.setDir( 2 );
            break;
        case 71:
            //left
            this.player3.setDir( 3 );
            break;
        case 74:                                                   // y h g j
            //right
            this.player3.setDir( 4 );
            break;
//////////////////////////////////////////////////////////////////////////////////////////////////////////


        case 37:
            //left
            this.player4.setDir( 3 );
            break;
        case 38:
            //up
            this.player4.setDir( 1 );
            break;
        case 39:                                                   // arrow key
            //right
            this.player4.setDir( 4 );
            break;
        case 40:
            //down
            this.player4.setDir( 2 );
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
        if( this.timeEvent.isTimeUp() ) { this.stopGame(); }
    }
    ,stopGame: function() {
        this.isGameStop = true;
        this.player1.stop();
        this.player2.stop();
        this.player3.stop();
        this.player4.stop();
        this.timeEvent.stop();
        this.unscheduleUpdate();
    }
    ,startGame: function() {
        if( !this.isGameStop || !this.isReset ) { return; }
        this.isReset = false;
        this.isGameStop = false;
        this.timeEvent.start();
        this.player1.schedule( this.player1.move, 0.3, Infinity, 0 );
        this.player2.schedule( this.player2.move, 0.3, Infinity, 0 );
        this.player3.schedule( this.player3.move, 0.3, Infinity, 0 );
        this.player4.schedule( this.player4.move, 0.3, Infinity, 0 );
        this.scheduleUpdate();
    }
    ,playAgain: function() {
        this.isReset = true;
        this.stopGame();
        this.timeEvent.setTime( this.time );
        this.timeEvent.removeScreen();
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
        //alert(temp);
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