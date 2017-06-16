BasicGame.MainMenu = function (game) {

    this.music = null;
    this.playButton = null;
    this.soundButton = null;
    this.displayHelpScreen = false;

};

BasicGame.MainMenu.prototype = {

    create: function () {
        var self = this;

        //	We've already preloaded our assets, so let's kick right into the Main Menu itself.
        //	Here all we're doing is playing some music and adding a picture and button
        //	Naturally I expect you to do something significantly better :)

        // Start Game Sound
        this.game.menuSelect = this.add.audio('menuSelect');
        this.game.soundMute = false;

        // Main Menu Music
        this.music = this.add.audio('titleMusic');
        this.music.fadeIn(10000);

        this.background = this.add.sprite(0, 0, 'backgroundMenu');
        var titlePaddingTop = 90;
        this.title = this.add.sprite(this.game.width / 2, titlePaddingTop, 'title');
        this.title.anchor.setTo(0.5, 0);
        this.title.alpha = 0;

        this.titleTween = this.game.add.tween(this.title).to({alpha: 1}, 2000, "Linear", true);

        // Sound Mute Toggle Button
        this.soundButton = this.add.button(25, 25, 'soundButton', function () {
            self.switchSound();
        });
        this.soundButton.alpha = 0.5;

        // Play button
        var playHeight = 90;
        var playPadding = 200;
        this.playButton = this.add.button(
            this.game.width / 2,
            this.game.height - playHeight / 2 - playPadding - this.game.paddingBot,
            'play',
            this.startGame,
            this,
            0, 1, 1, 1);
        this.playButton.anchor.setTo(0.5, 0.5);

        // Help Toggle Button
        this.helpButton = this.add.button(875, 15, 'helpButton', function () {
            self.toggleHelpScreen();
        });
        this.helpScreen = this.add.button(25, -700, 'openBook', function () {
            self.toggleHelpScreen();
        }, this);
    },

    update: function () {

        //	Do some nice funky main menu effect here

    },

    switchSound: function () {
        this.game.soundMute = !this.game.soundMute;
        if (!this.game.soundMute) {
            this.music.resume();
            this.soundButton.setFrames(0);
        } else {
            this.music.pause();
            this.soundButton.setFrames(1);
        }
    },

    toggleHelpScreen: function () {
        if (!this.displayHelpScreen) {
            this.helpTween = this.game.add.tween(this.helpScreen).to({x: 25, y: 0}, 2000, Phaser.Easing.Bounce.Out, true);
            this.displayHelpScreen = true;
        } else {
            this.helpTween = this.game.add.tween(this.helpScreen).to({x: 25, y: -700}, 2000, Phaser.Easing.Back.In, true);
            this.displayHelpScreen = false;
        }
    },

    startGame: function (pointer) {

        //	Ok, the Play Button has been clicked or touched, so let's stop the music (otherwise it'll carry on playing)
        this.music.stop();

        if (!this.game.soundMute) {
            this.game.menuSelect.play();
        }

        this.game.add.tween(this.playButton.scale).to({
            x: 1.1,
            y: 1.1
        }, 150, Phaser.Easing.Linear.None, true, 0, 0, true)
            .onComplete.add(this.startGameInternal, this);
    },

    startGameInternal: function () {
        this.state.start('Game');
    }

};
