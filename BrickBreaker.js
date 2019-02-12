'use const';

const BrickBreaker = function(top, left, width, height, rows, cols) {

	this.totalBricks = rows * cols;
	this.bricks = [];
	const brickWidth = width / cols;
	const brickHeight = 20;

	let nextBrickLeft = left;
	let nextBrickTop = top;

	for (let r = 0; r < rows; r++) {
		for (let c = 0; c < cols; c++) {

			
			this.bricks.push(
				new Brick(nextBrickLeft, nextBrickTop, brickWidth, brickHeight));

			nextBrickLeft += brickWidth;

		}	

		nextBrickLeft = left;
		nextBrickTop += brickHeight; 

	}

};