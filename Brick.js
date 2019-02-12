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
	
	return this.x < x && x < (this.x + this.w) && 
		this.y < y && y < (this.y + this.h);

};


Brick.prototype.hide = function() {
	this.isHidden = true;
};

