yc.inner.building.Recycle = yc.inner.building.Building.extend({
	
	ctor: function(){
		this.mitochondrias = [] ;
		this.mitochondriaCount = 1 ;
	}

	, draw: function(ctx){
	    if(!this.hexgon)
	    {
	        return ;
	    }
	
	    this._super(ctx) ;
	    
	    ctx.fillStyle = 'green' ;
	    ctx.font="normal san-serif";
	    ctx.fillText('∆',-6,+5) ;
	}
	
    , put: function(hexgon){
    	this._super(hexgon) ;
    	
    	this.releaseMitochondrias() ;
    }
	
	, releaseMitochondrias: function(){
		while( this.mitochondrias.length < this.mitochondriaCount )
		{
			var entity = new yc.inner.monster.Mitochondria(this) ;
			yc.inner.monster.VirusLayer.ins().addChild(entity) ;
			this.mitochondrias.push(entity) ;

			entity.release(cc.p( this.hexgon.center[0], this.hexgon.center[1] )) ;
		}
	}
}) ;

yc.inner.building.Recycle.price = {}

yc.inner.building.Recycle.upgraders = [] ;

yc.inner.building.Recycle.block = true ;