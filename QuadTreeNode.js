'use strict';

const QuadTreeNode = function(left, right, top, bottom) {

	this.maxItems = 10;

	this.midX = (left + right) / 2;
	this.midY = (top + bottom / 2);

	this.nwChild = null;
	this.neChild = null;
	this.swChild = null;
	this.seChild = null;

	this.items = [];
	this.count = 0;

};

QuadTreeNode.prototype.insertItem = function(item) {
	
	const self = this;
	this.count++;

	function insertIntoChildNode(item) {

		if (item.y < self.midY) { // north

			if (item.x < self.midX) { // west
				self.nwChild.insertItem(item);
			} else {
				self.neChild.insertItem(item); // east
			}

		} else { // south

			if (item.x < self.midX) { // west
				self.swChild.insertItem(item);
			} else {
				self.seChild.insertItem(item);					
			}				
		}		

	}

	if (this.nwChild == null) {
		
		this.items.push(item);		

		// split the node if needed
		if (this.items.length > this.maxItems) {

			this.nwChild = new QuantTreeNode(this.left, this.midX, this.top, this.midY);
			this.neChild = new QuantTreeNode(this.midX, this.right, this.top, this.midY);
			this.swChild = new QuantTreeNode(this.left, this.midX, this.midY, this.bottom);
			this.seChild = new QuantTreeNode(this.midX, this.right, this.midY, this.bottom);

			while(this.items.length > 0)
				insertIntoChildNode(this.items.unshift());
		}

	} else {
		insertIntoChildNode(item);
	}

};

QuadTreeNode.prototype.find = function(x, y) {

	if (this.items.length > 0) {

		const hits = this.items.filter(function(i) {
			return i.containsPoint(x, y);
		});

		if (hits.length > 0) {
			return hits[0];
		} else {
			return null;
		}

	} else if (this.count > 0) {

		if (y < this.midY) {
			if (x < this.midX) {
				return this.nwChild.find(x, y);
			} else {
				return this.neChild.find(x, y);
			}
		} else {
			if (x < this.midX) {
				return this.swChild.find(x, y);
			} else {
				return this.seChild.find(x, y);
			}
		}

	}

	return null;

};

// exports.QuantTreeNode = QuadTreeNode;
// module.exports = QuadTreeNode;





