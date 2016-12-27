define([
	"consts",
	"Character"
], function(
	consts,
	Character
){
	var tileSize = consts.tileSize,
		spriteSize = consts.spriteSize;
	var renderer = PIXI.autoDetectRenderer(14 * tileSize, 9 * tileSize);
	document.body.appendChild(renderer.view);
	var stage = new PIXI.Container();
	var one;



	PIXI.loader
		.add("images/sprites/place_holder_main_sprite_down.png")
		.add("images/sprites/place_holder_main_sprite_left.png")
		.add("images/sprites/place_holder_main_sprite_up.png")
		.add("images/sprites/place_holder_main_sprite_right.png")
		.load(setup);

	function setup(){
		one = new Character();
		stage.addChild(one.sprite);
		gameLoop();
	}
	
	

	function gameLoop() {
		requestAnimationFrame(gameLoop);
		document.onkeydown = function(e) {
	    switch (e.keyCode) {
	        case 37:
	        	one.sprite.setTexture(PIXI.utils.TextureCache["images/sprites/place_holder_main_sprite_left.png"]);
	        	if (one.sprite.x > 0) {
		            one.sprite.x -= consts.tileSize;
		        }
	            break;
	        case 38:
	        	one.sprite.setTexture(PIXI.utils.TextureCache["images/sprites/place_holder_main_sprite_up.png"]);
	        	if (one.sprite.y > 0) {
		            one.sprite.y -= consts.tileSize;
		        }
	            break;
	        case 39:
	        	one.sprite.setTexture(PIXI.utils.TextureCache["images/sprites/place_holder_main_sprite_right.png"]);
	        	if (one.sprite.x < 13 * tileSize) {
		            one.sprite.x += consts.tileSize;
		        }
	            break;
	        case 40:
	        	one.sprite.setTexture(PIXI.utils.TextureCache["images/sprites/place_holder_main_sprite_down.png"]);
	        	if (one.sprite.y < 8 * tileSize) {
		            one.sprite.y += consts.tileSize;
		        }
	            break;
		    }
		};
		renderer.render(stage);
	}
});