'use const';

const Brick = function(id, x, y, w, h) {

	this.id = id;
	this.left = x;
	this.bottom = y;
	this.width = w;
	this.height = h;
	this.right = this.left + this.width;
	this.top = this.bottom + this.height;
	this.isHidden = false;

};

Brick.prototype.containsPoint = function(x, y) {
	
	return this.left <= x && x <= (this.right) && 
		this.bottom <= y && y <= (this.top);

};


Brick.prototype.hide = function() {

	this.isHidden = true;

};

Brick.prototype.wallNearest = function(x, y, xPrev, yPrev) {

	// find the intersections of the brick boundary lines extended to infinity
	// with the ball's vector line 

	const slope = (yPrev - y) / (xPrev - x);
	const intersect = y - slope * x;

	// bottom line	
	const x_b = (this.bottom - intersect) / slope;
	const y_b = (this.bottom);

	// left line
	const x_l = (this.left);
	const y_l = (slope * this.left + intersect);

	// top line
	const x_t = (this.bottom + this.height - intersect) / slope;
	const y_t = (this.bottom + this.height);

	// right line
	const x_r = (this.right);
	const y_r = (slope * this.right + intersect);

	// left bottom wall	
	if (Math.min(x, xPrev) <= x_b && x_b <= Math.max(x, xPrev) &&
			Math.min(y, yPrev) <= y_b && y_b <= Math.max(y, yPrev) &&
			this.containsPoint(x_b, y_b)) {
		return 1;
	}

	// left wall
	if (Math.min(x, xPrev) <= x_l && x_l <= Math.max(x, xPrev) &&
			Math.min(y, yPrev) <= y_l && y_l <= Math.max(y, yPrev) &&
			this.containsPoint(x_l, y_l)) {
		return 2;
	}

	// top wall
	if (Math.min(x, xPrev) <= x_t && x_t <= Math.max(x, xPrev) &&
			Math.min(y, yPrev) <= y_t && y_t <= Math.max(y, yPrev) &&
			this.containsPoint(x_t, y_t)) {
		return 3;
	}

	// right wall
	if (Math.min(x, xPrev) <= x_r && x_r <= Math.max(x, xPrev) &&
			Math.min(y, yPrev) <= y_r && y_r <= Math.max(y, yPrev) &&
			this.containsPoint(x_r, y_r)) {
		return 4;
	}

	return -1;

};







