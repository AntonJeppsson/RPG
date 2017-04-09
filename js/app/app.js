define([
	"consts",
	"Character",
	"Screen",
	"Item"
], function(
	consts,
	Character,
	Screen,
	Item
){
	var tileSize = consts.tileSize,
		spriteSize = consts.spriteSize;
	var renderer = PIXI.autoDetectRenderer(15 * tileSize, 10 * tileSize);
	document.body.appendChild(renderer.view);
	var stage = new PIXI.Container();
	var one;
	var test;



	PIXI.loader
		.add("images/sprites/place_holder_main_sprite_down.png")
		.add("images/sprites/place_holder_main_sprite_left.png")
		.add("images/sprites/place_holder_main_sprite_up.png")
		.add("images/sprites/place_holder_main_sprite_right.png")
		.load(setup);

	function setup(){
		one = new Character();
		test = new Screen(15,10);
		test.updateMatrix(one,3,4);
		console.log(test.matrix);
		//one.updatePosition(3,4);
		//test.matrix[one.pos.x][one.pos.y] = one;
		stage.addChild(one.sprite);
		gameLoop();
	}
	
	

	function gameLoop() {
		requestAnimationFrame(gameLoop);
		//test.updateMatrix(one,1,2);
		for (var i = 0; i < test.matrix.length; i++) {
			for (var j = 0; j < test.matrix[i].length; j++){
				if (test.matrix[i][j] != undefined) {
					test.matrix[i][j].sprite.x = i * tileSize;
					test.matrix[i][j].sprite.y = j * tileSize;
				}
			}
		}

		document.onkeydown = function(e) {
		    switch (e.keyCode) {
		        case 37:
		        	//left
		        	if (one.dir != "left") {
		        		one.sprite.setTexture(PIXI.utils.TextureCache["images/sprites/place_holder_main_sprite_left.png"]);
		        		one.dir = "left";
		        	}
		        	else if (test.inRange(one.pos.x - 1, one.pos.y)) {
		        		console.log(test.matrix);
		        		test.updateMatrix(one,-1,0);
		        	}
		            break;
		        case 38:
		        	//up
		        	if (one.dir != "up") {
		        		one.sprite.setTexture(PIXI.utils.TextureCache["images/sprites/place_holder_main_sprite_up.png"]);
		        		one.dir = "up";
		        	}
		        	else if (test.inRange(one.pos.x, one.pos.y - 1)) {
		        		test.updateMatrix(one,0,-1);
		        	}
		            break;
		        case 39:
		        	//right
		        	if (one.dir != "right") {
		        		one.sprite.setTexture(PIXI.utils.TextureCache["images/sprites/place_holder_main_sprite_right.png"]);
		        		one.dir = "right";
		        	}
		        	else if (test.inRange(one.pos.x + 1, one.pos.y)) {
		        		test.updateMatrix(one,1,0);
		        	}
		            break;
		        case 40:
		        	//down
		        	if (one.dir != "down") {
		        		one.sprite.setTexture(PIXI.utils.TextureCache["images/sprites/place_holder_main_sprite_down.png"]);
		        		one.dir = "down";
		        	}
		        	else if (test.inRange(one.pos.x, one.pos.y + 1)) {
		        		test.updateMatrix(one,0,1);
		        	}
		            break;
		    }
		};

		renderer.render(stage);
	}
});