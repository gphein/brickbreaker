const InitView = function(game) {

	const gameDiv = $('#game');

	for (let k = 0; k < game.totalBricks; k++) {
		gameDiv.append($(`<div brick='${game.bricks[k].id}' class='brick'></div>`).
			css({'left': game.bricks[k].left - game.bricks[0].left,
					'bottom': game.bricks[k].bottom,
					'width': game.bricks[k].width,
					'height': game.bricks[k].height
				}));
	}

};