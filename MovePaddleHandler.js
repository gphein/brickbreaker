
const MovePaddleHandler = function(game, point, paddle, container, evt) {

	let paddleLeft = Number(paddle.css('left').slice(0, -2));
	let paddleWidth = Number(paddle.css('width').slice(0, -2));
	const containerWidth = container.css('width').slice(0, -2);
	const containerRight = Number(containerWidth); // left is zero b/c of relative positioning
	
	if (point.x == null) {
		point.x = evt.pageX;
	} else {		
		let newLeft = paddleLeft + (evt.pageX - point.x);
		let newRight = newLeft + paddleWidth;
		if (newLeft < 0) newLeft = 0;
		if (newRight > containerRight) newLeft = containerRight - paddleWidth;
		paddle.css('left', String(newLeft) + 'px');
		game.paddle.x = newLeft;
		point.x = evt.pageX;
	}


};

