
BasicGame.DBInc = function (game) {
};

BasicGame.DBInc.prototype = {

	create: function () {
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
            2000);
	},

	update: function () {
	}

};
