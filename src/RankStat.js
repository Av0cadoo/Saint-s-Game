var RankStat = cc.Sprite.extend({
	ctor: function( field ) {
		this._super();
		this.field = field;

		this.red = new Score( 'p1', field );
		this.orange = new Score( 'p2', field );
		this.green = new Score( 'p3', field );
		this.blue = new Score( 'p4', field );

		this.addChild( this.red );
		this.addChild( this.orange );
		this.addChild( this.green );
		this.addChild( this.blue );
		this.red.start( this.field.getRedRank() );
		this.orange.start( this.field.getOrangeRank() );
		this.green.start( this.field.getGreenRank() );
		this.blue.start( this.field.getBlueRank() );
		this.schedule( this.update, 0.15, Infinity, 0 );
	},

	update: function() {
		this.red.setRank( this.field.getRedRank() );
		this.orange.setRank( this.field.getOrangeRank() );
		this.green.setRank( this.field.getGreenRank() );
		this.blue.setRank( this.field.getBlueRank() );
	}
	
})
