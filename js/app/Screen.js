define([],function(){
	function Screen(width,height) {
		this.width = width;
		this.height = height;
		this.matrix = new Array(width);
		for (var i = 0; i < width; i++) {
			this.matrix[i] = new Array(height);
		}
	}

	Screen.prototype.updateMatrix = function(obj) {
		for (i = 0; i < this.matrix.length; i++){
			for (j = 0; j < this.matrix[i].length; j++){
				if (obj.pos.x == i && obj.pos.y == j) {
					this.matrix[i][j] = obj;
				}
				else if (obj.pos.x != i || obj.pos.y != j) {
					this.matrix[i][j] = undefined;
				}
			}
		}
	}

	Screen.prototype.inRange = function(x,y) {
		if (x >= 0 && x < this.width && y >= 0 && y < this.height) {
			return true;
		}
	}

	return Screen;
});