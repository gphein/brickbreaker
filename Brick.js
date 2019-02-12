'use const';

const Brick = function(id, x, y, w, h) {

	this.id = id;
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.isHidden = false;

};

Brick.prototype.containsPoint = function(x, y) {
	
	return this.x <= x && x <= (this.x + this.w) && 
		this.y <= y && y <= (this.y + this.h);

};


Brick.prototype.hide = function() {

	this.isHidden = true;

};

Brick.prototype.wallNearest = function(x, y, m, b) {

	// find the intersections of the brick boundary lines extended to infinity
	// with the ball's vector line 

	// bottom line
	const x_b = (this.y + this.h - b) / m;
	const y_b = (this.y + this.h);

	// left line
	const x_l = (this.x);
	const y_l = (m * this.x + b);

	// top line
	const x_t = (this.y - b) / m;
	const y_t = (this.y);

	// right line
	const x_r = (this.x + this.w);
	const y_r = (m * (this.x + this.w) + b);
	
	const distance_b = Math.sqrt(Math.pow(x - x_b, 2) + Math.pow(y - y_b, 2));
	const distance_l = Math.sqrt(Math.pow(x - x_l, 2) + Math.pow(y - y_l, 2));
	const distance_t = Math.sqrt(Math.pow(x - x_t, 2) + Math.pow(y - y_t, 2));
	const distance_r = Math.sqrt(Math.pow(x - x_r, 2) + Math.pow(y - y_r, 2));

	const distance_min = Math.min(distance_b, distance_l, distance_t, distance_r);

	if (distance_min == distance_b) return 1;
	if (distance_min == distance_l) return 2;
	if (distance_min == distance_t) return 3;
	if (distance_min == distance_r) return 4;

	return -1

};







