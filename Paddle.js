const Paddle = function(x, width, height) {

	this.x = x;
	this.w = width;
	this.h = height;

};

Paddle.prototype.detectPaddleCollision = function(x, y) {
	
	// return the distance from center or -1 for no impact
	if (this.x < x && x < this.x + this.w) {
		if (y < this.h && y > 0) {
			const mid = (this.x + this.w / 2);
			return (x - this.x) / (this.x + this.w);
		}
	}

	return -1;

};