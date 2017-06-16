
BasicGame.Game = function (game) {

	//	When a State is added to Phaser it automatically has the following properties set on it, even if they already exist:

    this.game;		//	a reference to the currently running game
    this.add;		//	used to add sprites, text, groups, etc
    this.camera;	//	a reference to the game camera
    this.cache;		//	the game cache
    this.input;		//	the global input manager (you can access this.input.keyboard, this.input.mouse, as well from it)
    this.load;		//	for preloading assets
    this.math;		//	lots of useful common math operations
    this.sound;		//	the sound manager - add a sound, play one, set-up markers, etc
    this.stage;		//	the game stage
    this.time;		//	the clock
    this.tweens;	//	the tween manager
    this.world;		//	the game world
    this.particles;	//	the particle manager
    this.physics;	//	the physics manager
    this.rnd;		//	the repeatable random number generator

    //	You can use any of these from any function within this State.
    //	But do consider them as being 'reserved words', i.e. don't create a property for your own game called "world" or you'll over-write the world reference.

    this.currentState = 'outside_seaside';
    this.futureState = 'outside_seaside';
    this.currentMusic; // leave blank so it gets set on the first run
    this.visitedStates = [];
};

BasicGame.Game.prototype = {

	create: function () {
        var self = this;

		this.score = 42;

		this.currentBackground = this.add.image(0, 0, 'outside_seaside');

        var headY = 25 + 60 / 2;
        this.pauseButton = this.add.button(25 + (60 / 2), headY, 'pause', function() { self.pause(); });
        this.pauseButton.anchor.setTo(0.5, 0.5);

        this.pauseboard = new Pauseboard(this.game);
        this.add.existing(this.pauseboard);
	},

    pause: function() {
        if (!this.game.soundMute) {
            this.game.menuSelect.play();
        }

        this.game.add.tween(this.pauseButton.scale).
            to( { x: 1.1, y: 1.1 }, 150, Phaser.Easing.Linear.None, true, 0, 0, true);

        this.pauseboard.show();
    },

	update: function () {

        this.pauseboard.update();
		//	Honestly, just about anything could go here. It's YOUR game after all. Eat your heart out!

	},

	quitGame: function (pointer) {

		//	Here you should destroy anything you no longer need.
		//	Stop music, delete sprites, purge caches, free resources, all that good stuff.

		//	Then let's go back to the main menu.
		this.state.start('MainMenu');
	}

};
