const InitView = function(game) {

	const gameDiv = $('#game');
	for (let k = 0; k < game.totalBricks; k++) {
		gameDiv.append($('<div class="brick"></div>').
			css({'left': game.bricks[k].x - game.bricks[0].x,
					'top': game.bricks[k].y - game.bricks[0].y,
					'width': game.bricks[k].w,
					'height': game.bricks[k].h
				}));
	}

};