
BasicGame.Sponsor = function (game) {

};

BasicGame.Sponsor.prototype = {

	create: function () {
		this.add.sprite(0, 0, 'sponsor');
        var self = this;
        setTimeout(function() {
                self.state.start('Preloader');
            },
            2000);
	},

	update: function () {

	}

};
