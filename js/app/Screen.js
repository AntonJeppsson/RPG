define([
	"Character"
	],function(
	Character
	){
	function Screen(width,height) {
		this.width = width;
		this.height = height;
		this.matrix = new Array(width);
		for (var i = 0; i < width; i++) {
			this.matrix[i] = new Array(height);
		}
	}

	Screen.prototype.updateMatrix = function(obj,x,y) {
		var a = obj.pos.x + x;
		var b = obj.pos.y + y;

		for (i = 0; i < this.matrix.length; i++){
			for (j = 0; j < this.matrix[i].length; j++){
				if (this.matrix[i][j] == obj) {
					this.matrix[i][j] = undefined;
				}
			}
		}

		if (this.matrix[a][b] == undefined) {
			this.matrix[a][b] = obj;
		}
				obj.updatePosition(a,b);
		/*for (i = 0; i < this.matrix.length; i++){
			for (j = 0; j < this.matrix[i].length; j++){
				if (obj.pos.x == i && obj.pos.y == j) {
					this.matrix[i][j] = obj;
				}
				else if ((obj.pos.x != i || obj.pos.y != j) && this.matrix[i][j] == obj) {
					this.matrix[i][j] = undefined;
				}
			}
		}*/
	}

	Screen.prototype.inRange = function(x,y) {
		if (x >= 0 && x < this.width && y >= 0 && y < this.height) {
			return true;
		}
	}

	return Screen;
});