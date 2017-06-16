BasicGame = {

    /* Here we've just got some global level vars that persist regardless of State swaps */
    score: 0,

    /* If the music in your game needs to play through-out a few State swaps, then you could reference it here */
    music: null,

    /* Your game can check BasicGame.orientated in internal loops to know if it should pause or not */
    orientated: false

};

var WebFontConfig;

BasicGame.Boot = function (game) {
//  The Google WebFont Loader will look for this object, so create it before loading the script.
    WebFontConfig = {

        //  The Google Fonts we want to load (specify as many as you like in the array)
        google: {
            families: ['Crimson Text']
        }

    };
};

BasicGame.Boot.prototype = {

    preload: function () {
        this.game.stage.backgroundColor = "#000";
        //  Here we load the assets required for our preloader (in this case a background and a loading bar)
        this.load.image('preloaderBackground', 'resources/images/preloader_background.png');
        this.load.image('preloaderBar', 'resources/images/preloader_bar.png');
        this.load.image('preloaderBarGray', 'resources/images/preloader_bar_gray.png');
    },

	create: function () {
		this.input.maxPointers = 1;
		this.stage.disableVisibilityChange = true;

		BasicGame.orientated = true;
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.scale.minWidth = this.game.width / 2;
		this.scale.minHeight = this.game.height / 2;
		this.scale.pageAlignHorizontally = true;
		this.scale.pageAlignVertically = true;

		if (this.game.device.desktop)
		{
			this.scale.maxWidth = this.game.width;
			this.scale.maxHeight = this.game.height;
			this.scale.refresh();
		}
		else
		{
			this.scale.maxWidth = this.game.width * 2.5;
			this.scale.maxHeight = this.game.height * 2.5;
			this.scale.forceOrientation(true, false);
            this.scale.setResizeCallback(this.gameResized, this);
			this.scale.enterIncorrectOrientation.add(this.enterIncorrectOrientation, this);
			this.scale.leaveIncorrectOrientation.add(this.leaveIncorrectOrientation, this);
			this.scale.refresh();
		}

		this.state.start('CheckOrientation');
	},

	gameResized: function (width, height) {
		//  This could be handy if you need to do any extra processing if the game resizes.
		//  A resize could happen if for example swapping orientation on a device.
	},

	enterIncorrectOrientation: function () {
		BasicGame.orientated = false;
		document.getElementById('dbinc_rp_orientation').style.display = 'block';
	},

	leaveIncorrectOrientation: function () {
		BasicGame.orientated = true;
		document.getElementById('dbinc_rp_orientation').style.display = 'none';
		this.scale.refresh();
	}
};