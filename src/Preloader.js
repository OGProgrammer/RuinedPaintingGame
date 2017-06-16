
BasicGame.Preloader = function (game) {

	this.background = null;
	this.preloadBar = null;

	this.ready = false;

};

BasicGame.Preloader.prototype = {

	preload: function () {


		//	These are the assets we loaded in Boot.js
		//	A nice sparkly background and a loading progress bar
		this.add.sprite(0, 0, 'preloaderBackground');

		this.game.paddingBot = 64;

		var barWidth = 351;
		var barHeight = 50;
		var barPaddingBot = 25;
        var barX = (this.game.width - barWidth) / 2;
        var barY = this.game.height - barHeight - barPaddingBot - this.game.paddingBot;
        this.add.sprite(barX, barY, 'preloaderBarGray');
		this.preloadBar = this.add.sprite(barX, barY, 'preloaderBar');

		//	This sets the preloadBar sprite as a loader sprite.
		//	What that does is automatically crop the sprite from 0 to full-width
		//	as the files below are loaded in.
		this.load.setPreloadSprite(this.preloadBar);

		//	Here we load the rest of the assets our game needs.
		//	As this is just a Project Template I've not provided these assets, the lines below won't work as the files themselves will 404, they are just an example of use.
        this.load.image('dbinc', 'resources/images/dbinc-games.png');
        this.load.image('openBook', 'resources/images/an_open_book.png');
        this.load.image('title', 'resources/images/vintage_emblem.png');
        this.load.image('backgroundMenu', 'resources/images/background_mainmenu.png');
        this.load.image('helpButton', 'resources/images/help_icon.png');
        this.load.image('pause', 'resources/images/control-pause.png');
        this.load.image('home', 'resources/images/control-home.png');
        this.load.image('restart', 'resources/images/control-restart.png');
        this.load.image('pauseBoard', 'resources/images/pause_menu.png');

        this.load.spritesheet('play', 'resources/sprites/start_game.png', 300, 90);
        this.load.spritesheet('soundButton', 'resources/sprites/sound_toggle.png', 30, 30);
        this.load.spritesheet('blueButton', 'resources/sprites/blue_button.png', 290, 60);

        this.load.audio('dbincRpHeartbeat', ['resources/audio/dbinc-jingle.mp3', 'resources/audio/dbinc-jingle.ogg']);
        this.load.audio('menuSelect', ['resources/audio/crash.mp3', 'resources/audio/crash.ogg']);
        this.load.audio('titleMusic', ['resources/music/theme.mp3', 'resources/music/theme.ogg']);

        //  Load the Google WebFont Loader script
        this.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');

        // Setup Background Images
        for (var ii = 0; ii < rpBackgrounds.length; ii++) {
            this.game.load.image(rpBackgrounds[ii].name, rpBackgrounds[ii].src);
        }
        // Setup Music
        for (var mi = 0; mi < rpMusicMap.length; mi++) {
            this.game.load.audio(rpMusicMap[mi].name, rpMusicMap[mi].src);
        }
        // Setup SoundFx
        for (var xi = 0; xi < rpSoundFxMap.length; xi++) {
            this.game.load.audio(rpSoundFxMap[xi].name, rpSoundFxMap[xi].src);
        }
        // Setup Buttons
        for (var bi = 0, len = rpButtonsMap.length; bi < len; bi++) {
            this.game.load.spritesheet(rpButtonsMap[bi].name, rpButtonsMap[bi].src, rpButtonsMap[bi].width, rpButtonsMap[bi].height);
        }
	},

	create: function () {

		//	Once the load has finished we disable the crop because we're going to sit in the update loop for a short while as the music decodes
		this.preloadBar.cropEnabled = false;

	},

	update: function () {

		//	You don't actually need to do this, but I find it gives a much smoother game experience.
		//	Basically it will wait for our audio file to be decoded before proceeding to the MainMenu.
		//	You can jump right into the menu if you want and still play the music, but you'll have a few
		//	seconds of delay while the mp3 decodes - so if you need your music to be in-sync with your menu
		//	it's best to wait for it to decode here first, then carry on.
		
		//	If you don't have any music in your game then put the game.state.start line into the create function and delete
		//	the update function completely.
		
		if (this.cache.isSoundDecoded('titleMusic') && this.ready === false)
		{
			this.ready = true;
			this.state.start('DBInc');
		}
	}

};
