
BasicGame.DBInc = function (game) {
    this.fireFilter;
};

BasicGame.DBInc.prototype = {

	create: function () {
        if (this.game.device.desktop) {
            var background = this.game.add.sprite(0, 0);
            background.width = 960;
            background.height = 640;

            this.fireFilter = this.game.add.filter('Fire', 800, 600);
            this.fireFilter.alpha = 0.0;

            background.filters = [this.fireFilter];
        }
        var gaSprite = this.add.sprite(this.game.width / 2, this.game.height / 2, 'dbinc');
        gaSprite.anchor.setTo(0.5, 0.5);
        var gaSound = this.add.audio('dbincRpHeartbeat');

        gaSound.play();
        gaSprite.scale.setTo(0.8, 0.8);
        this.game.add.tween(gaSprite.scale).to( { x: 1, y: 1 }, 150, Phaser.Easing.Linear.None, true, 0, 0, true);


        var self = this;
        setTimeout(function() {
                self.state.start('MainMenu');
            },
            2500);
	},

	update: function () {
        if (this.game.device.desktop) {
            // Update 🔥
            this.fireFilter.update();
        }
	}

};
