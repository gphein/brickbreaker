'use const';

const BrickBreaker = function(containerHeight, containerWidth,
															brickHeight, rows, cols, 
															paddleLeft, paddleWidth, paddleHeight) {

	this.totalBricks = rows * cols;
	this.bricks = [];
	this.quadTree = new QuadTreeNode(0, containerWidth, containerHeight, 0);
	this.paddle = new Paddle(paddleLeft, paddleWidth, paddleHeight);

	const brickWidth = containerWidth / cols;

	let nextBrickLeft = 0;
	let nextBrickTop = containerHeight;

	for (let r = 0; r < rows; r++) {
		for (let c = 0; c < cols; c++) {

			this.bricks.push(
				new Brick(this.bricks.length, nextBrickLeft, nextBrickTop - brickHeight, brickWidth, brickHeight));

			nextBrickLeft += brickWidth;

		}	

		nextBrickLeft = 0;
		nextBrickTop -= brickHeight; 

	}

};

BrickBreaker.prototype.detectBrickCollision = function(x, y) {

	for (let k = 0; k < this.bricks.length; k++) {
		if (!this.bricks[k].isHidden && this.bricks[k].containsPoint(x, y)) {
			return this.bricks[k];
		}
	}
	
};






