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

    this.rpCurrentBackground;
    this.rpFutureBackground;
    this.rpCurrentState;
    this.rpFutureState;
    this.rpMusic;
    this.rpSoundsFx;
    this.rpVisitedStates;

    this.rpLeftButton;
    this.rpForwardButton;
    this.rpRightButton;
    this.rpBackButton;

    this.rpFullscreenButton;
    this.rpFullscreenButton;

    this.rpTweenScene;

    this.rpMenuLayer;
    this.rpFrontLayer;
    this.rpBackLayer;
};

BasicGame.Game.prototype = {

    create: function () {
        var self = this;

        // @todo maybe I can do some cool shit with the cursor one day
        // this.game.input.addMoveCallback( function(pointer, x, y) {
        //     // pointer is the active pointer, x and y give you the position of the pointer
        //     // on the canvas so here you can position you custom cursor sprite
        // });

        this.rpVisitedStates = [];
        // Init Groups (Layers for making rendering easier to keep buttons on top the backgrounds being switched out)
        // Do not mess with the ordering here, it's like this for a reason...
        this.rpBackLayer = this.game.add.group();
        this.rpFrontLayer = this.game.add.group();
        this.rpMenuLayer = this.game.add.group();

        // Init States
        this.rpCurrentState = this.rpFutureState = rpGameMap["start"];

        // Init BGs
        this.rpCurrentBackground = this.add.image(0, 0, this.rpCurrentState);
        this.rpBackLayer.add(this.rpCurrentBackground);

        // Init Music
        this.playMusic();

        // Init Move Buttons
        this.createNavigationButtons();

        // Init Pause Button (Top Left)
        this.pauseButton = this.add.button(35, 35, 'pause', function () {
            self.pause()
        }, this);
        this.pauseButton.alpha = 0.8;
        this.pauseButton.anchor.setTo(0.5, 0.5);
        this.rpFrontLayer.add(this.pauseButton);

        // Init FullScreen Button (Top Right)
        this.rpFullscreenButton = this.add.button(895, 30, 'fullscreenButton', function () {
            self.fullscreen()
        }, this, 0, 0, 0);
        this.rpFullscreenButton.alpha = 0.8;
        this.rpFullscreenButton.anchor.setTo(0.5, 0.5);
        this.rpFrontLayer.add(this.rpFullscreenButton);

        this.showQuickInstructions();

        // Init Pause Board
        this.pauseboard = new Pauseboard(this.game);
        this.add.existing(this.pauseboard);

        // @todo the full screen don't work :(
        // Stretch to fill
        this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
    },

    pause: function () {
        if (!this.game.soundMute) {
            this.game.menuSelect.play();
        }

        this.game.add.tween(this.pauseButton.scale).to({
            x: 1.1,
            y: 1.1
        }, 150, Phaser.Easing.Linear.None, true, 0, 0, true);

        this.pauseboard.show();
    },

    update: function () {
        //If the state changed
        if (this.rpCurrentState !== this.rpFutureState) {

            // Update visited places
            this.rpVisitedStates[this.rpCurrentState] = true;

            // Update Background Image
            this.rpFutureBackground = this.game.add.image(this.game.world.centerX, this.game.world.centerY, this.rpFutureState);
            this.rpFutureBackground.anchor.set(0.5);
            this.rpFutureBackground.alpha = 0;
            this.rpBackLayer.add(this.rpFutureBackground);
            this.rpTweenScene = this.game.add.tween(this.rpFutureBackground).to({alpha: 1}, 250, "Linear", true, 100);

            // Update buttons
            this.updateNavigationButtons();

            // Update Background Music
            if (this.rpMusic !== rpGameMap[this.rpFutureState].music) {
                this.music.fadeOut(1000);
                this.music.destroy();
                this.rpMusic = rpGameMap[this.rpFutureState].music;
            }

            // Play and sound fx needed
            this.playMusic();

            // Set future state to current now that all changes have been updated
            this.rpCurrentState = this.rpFutureState;
        }
    },

    sceneTransitionCompleted: function () {

    },

    fullscreen: function () {
        if (this.scale.isFullScreen) {
            this.rpFullscreenButton.setFrames(0, 0, 0);
            this.scale.stopFullScreen();
        } else {
            this.rpFullscreenButton.setFrames(1, 1, 1);
            this.scale.startFullScreen();
        }
    },

    createNavigationButtons: function () {
        var self = this;

        this.rpForwardButton = this.game.add.button(this.game.world.centerX, 50, 'moveButton', function () {
            self.moveForward()
        }, this, 2, 1, 0);
        this.rpForwardButton.anchor.set(0.5, 0.5);
        this.rpFrontLayer.add(this.rpForwardButton);

        this.rpRightButton = this.game.add.button(this.game.world.centerX + 350, this.game.world.centerY, 'moveButton', function () {
            self.moveRight()
        }, this, 2, 1, 0);
        this.rpRightButton.anchor.set(0.5, 0.5);
        this.rpRightButton.angle = 90;
        this.rpFrontLayer.add(this.rpRightButton);

        this.rpBackButton = this.game.add.button(this.game.world.centerX, this.game.world.centerY + 250, 'moveButton', function () {
            self.moveBack()
        }, this, 2, 1, 0);
        this.rpBackButton.anchor.set(0.5, 0.5);
        this.rpBackButton.angle = 180;
        this.rpFrontLayer.add(this.rpBackButton);

        this.rpLeftButton = this.game.add.button(this.game.world.centerX - 350, this.game.world.centerY, 'moveButton', function() {
            self.moveLeft()
        }, this, 2, 1, 0);
        this.rpLeftButton.anchor.set(0.5, 0.5);
        this.rpLeftButton.angle = 270;
        this.rpFrontLayer.add(this.rpLeftButton);

        // Update the visibility of the buttons based on state (something seems like i may need to move this)
        this.updateNavigationButtons();
    },

    updateNavigationButtons: function () {
        // Visible
        this.rpForwardButton.visible = rpGameMap[this.rpFutureState].forward.btn;
        this.rpRightButton.visible = rpGameMap[this.rpFutureState].right.btn;
        this.rpBackButton.visible = rpGameMap[this.rpFutureState].back.btn;
        this.rpLeftButton.visible = rpGameMap[this.rpFutureState].left.btn;

        //@todo add some logic here to check the visitedStates and fades the buttons of where they have been
        if (this.rpVisitedStates.hasOwnProperty(rpGameMap[this.rpFutureState].forward.goto)) {
            this.rpForwardButton.alpha = 0.666;
        }
        if (this.rpVisitedStates.hasOwnProperty(rpGameMap[this.rpFutureState].left.goto)) {
            this.rpLeftButton.alpha = 0.666;
        }
        if (this.rpVisitedStates.hasOwnProperty(rpGameMap[this.rpFutureState].right.goto)) {
            this.rpRightButton.alpha = 0.666;
        }
        if (this.rpVisitedStates.hasOwnProperty(rpGameMap[this.rpFutureState].back.goto)) {
            this.rpBackButton.alpha = 0.666;
        }
    },


    // Move logic
    moveForward: function () {
        this.rpNavigation('forward');
    },

    moveRight: function () {
        this.rpNavigation('right');
    },

    moveBack: function () {
        this.rpNavigation('back');
    },

    moveLeft: function () {
        this.rpNavigation('left');
    },

    rpNavigation: function (direction) {
        console.log(direction);
        // Are we actually allowed to move?
        if (rpGameMap[this.rpCurrentState][direction].btn) {
            // Ok lets move the char by telling the system our state has changed.
            this.rpFutureState = rpGameMap[this.rpCurrentState][direction].goto;

            if (this.rpSoundFx !== undefined) {
                this.rpSoundFx.destroy();
            }
            this.rpSoundFx = this.game.add.audio(rpGameMap[this.rpCurrentState][direction].soundfx).play();

        } else {
            console.log(direction + 'direction is broken for ' + this.rpCurrentState + " state");
        }
    },


    playMusic: function () {
        if (this.rpMusic !== rpGameMap[this.rpFutureState].music) {
            this.music = this.game.add.audio(rpGameMap[this.rpFutureState].music).play();
            this.rpMusic = rpGameMap[this.rpFutureState].music;
        }
    },

    showQuickInstructions: function () {
        // I know this shit seems confusing but its just dropping in the sprite and then moving it along down, then die.
        var self = this;
        this.findThePainting = this.add.sprite(230, -700, 'findThePainting');
        this.findThePaintingTween = this.game.add.tween(this.findThePainting).to({
            x: 230,
            y: 100
        }, 1500, Phaser.Easing.Exponential.Out, true).onComplete.add(function () {
            // Delay a bit @todo maybe a sprite function to do this instead of  using setTimeout
            setTimeout(function () {
                self.findThePaintingTween = self.game.add.tween(self.findThePainting).to({
                    x: 230,
                    y: 1000
                }, 1000, Phaser.Easing.Exponential.In, true).onComplete.add(
                    function () {
                        self.findThePainting.destroy();
                    }
                );
            }, 500);
        }, this);
    },

    quitGame: function (pointer) {

        //	Here you should destroy anything you no longer need.
        //	Stop music, delete sprites, purge caches, free resources, all that good stuff.

        //	Then let's go back to the main menu.
        this.state.start('MainMenu');
    }

}
;
