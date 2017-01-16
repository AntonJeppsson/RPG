define([
	"consts"
	],function(
	consts
	){
	function Item(){
		this.pos = {
			x: 0,
			y: 0
		}
		var texture = PIXI.utils.TextureCache["images/sprites/place_holder_main_sprite_down.png"];
		this.sprite = new PIXI.Sprite(texture);
		this.sprite.x = this.pos.x * consts.tileSize;
		this.sprite.y = this.pos.y * consts.tileSize;
	}

	Item.prototype.updatePosition = function(x,y) {
		this.pos.x += x;
		this.pos.y += y;
	}

	return Item;
});