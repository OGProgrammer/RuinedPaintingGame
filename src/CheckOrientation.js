
BasicGame.CheckOrientation = function (game) {

};

BasicGame.CheckOrientation.prototype = {

	create: function () {
	},

	update: function () {
        if (BasicGame.orientated) {
            this.state.start('Preloader');
        }
	}

};
