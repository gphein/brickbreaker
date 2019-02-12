'use const';

const BrickBreaker = function(top, left, width, height, rows, cols) {

	this.totalBricks = rows * cols;
	this.bricks = [];
	this.quadTree = new QuadTreeNode(left, left + width, top, top + height);

	const brickWidth = width / cols;
	const brickHeight = 20;

	let nextBrickLeft = left;
	let nextBrickTop = top;

	for (let r = 0; r < rows; r++) {
		for (let c = 0; c < cols; c++) {

			this.bricks.push(
				new Brick(this.bricks.length, nextBrickLeft, nextBrickTop, brickWidth, brickHeight));

			nextBrickLeft += brickWidth;

		}	

		nextBrickLeft = left;
		nextBrickTop += brickHeight; 

	}

};

BrickBreaker.prototype.detectCollision = function(x, y) {

	for (let k = 0; k < this.bricks.length; k++) {
		if (this.bricks[k].containsPoint(x, y)) {
			return this.bricks[k];
		}
	}
	
};