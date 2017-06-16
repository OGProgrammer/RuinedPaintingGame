'use strict';
var Pauseboard = function(game) {
	Phaser.Group.call(this, game);
	this.refWidth = 640;
	this.refHeight = 600;
	this.baseX = Math.floor(this.game.width / 2);
	this.baseY = Math.floor(this.refHeight / 2);

    this.pauseboard = this.create(this.baseX, this.baseY, 'pauseBoard');
    this.pauseboard.anchor.setTo(0.5, 0.4);

    this.soundButton = this.game.add.button(-175, -125, 'soundButton', this.switchSound, this);
    this.soundButton.alpha = 0.7;
    this.pauseboard.addChild(this.soundButton);

    // RESUME BUTTON
    this.resumeButton = this.game.add.button(
        this.baseX, this.baseY, 'blueButton', this.startClick, this, 2, 0, 1, 3
    );
    this.resumeButton.anchor.setTo(0.5, 0.5);
    this.add(this.resumeButton);

    this.resumeButtonText = this.game.add.text(-65, -25, "Resume");
    this.resumeButton.addChild(this.resumeButtonText);

    this.resumeButtonText.font = 'Crimson Text';
    this.resumeButtonText.fontSize = 42;

    this.textGradient = this.resumeButtonText.context.createLinearGradient(0, 0, 0, this.resumeButtonText.canvas.height);
    this.textGradient.addColorStop(0, '#cbb897');
    this.textGradient.addColorStop(1, '#b34e47');
    this.resumeButtonText.fill = this.textGradient;

    this.resumeButtonText.stroke = '#000000';
    this.resumeButtonText.strokeThickness = 2;
    // this.resumeButtonText.setShadow(5, 5, 'rgba(0,0,0,0.5)', 5);

    this.resumeButton.events.onInputUp.add(function() {this.resumeButtonText.fill = this.textGradient;}, this);
    this.resumeButton.events.onInputDown.add(function() {this.resumeButtonText.fill = '#eceb4e';}, this);
    this.resumeButton.events.onInputOver.add(function() {this.resumeButtonText.fill = '#7a1a2f';}, this);
    this.resumeButton.events.onInputOut.add(function() {this.resumeButtonText.fill = this.textGradient;}, this);

    // RESTART BUTTON
    this.restartButton = this.game.add.button(
        this.baseX, this.baseY + 100, 'blueButton', this.restartClick, this, 2, 0, 1, 3
    );
    this.restartButton.anchor.setTo(0.5, 0.5);
    this.add(this.restartButton);

    this.restartButtonText = this.game.add.text(-58, -25, "Restart");
    this.restartButton.addChild(this.restartButtonText);

    this.restartButtonText.font = 'Crimson Text';
    this.restartButtonText.fontSize = 42;

    this.textGradient = this.resumeButtonText.context.createLinearGradient(0, 0, 0, this.restartButtonText.canvas.height);
    this.textGradient.addColorStop(0, '#cbb897');
    this.textGradient.addColorStop(1, '#b34e47');
    this.restartButtonText.fill = this.textGradient;

    this.restartButtonText.stroke = '#000000';
    this.restartButtonText.strokeThickness = 2;

    this.restartButton.events.onInputUp.add(function() {this.restartButtonText.fill = this.textGradient;}, this);
    this.restartButton.events.onInputDown.add(function() {this.restartButtonText.fill = '#eceb4e';}, this);
    this.restartButton.events.onInputOver.add(function() {this.restartButtonText.fill = '#7a1a2f';}, this);
    this.restartButton.events.onInputOut.add(function() {this.restartButtonText.fill = this.textGradient;}, this);


    // MAIN MENU BUTTON
    this.mainmenuButton = this.game.add.button(
        this.baseX, this.baseY + 200, 'blueButton', this.homeClick, this, 2, 0, 1, 3
    );
    this.mainmenuButton.anchor.setTo(0.5, 0.5);
    this.add(this.mainmenuButton);

    this.mainmenuButtonText = this.game.add.text(-40, -28, "Quit");
    this.mainmenuButton.addChild(this.mainmenuButtonText);

    this.mainmenuButtonText.font = 'Crimson Text';
    this.mainmenuButtonText.fontSize = 42;

    this.textGradient = this.resumeButtonText.context.createLinearGradient(0, 0, 0, this.mainmenuButtonText.canvas.height);
    this.textGradient.addColorStop(0, '#cbb897');
    this.textGradient.addColorStop(1, '#b34e47');
    this.mainmenuButtonText.fill = this.textGradient;

    this.mainmenuButtonText.stroke = '#000000';
    this.mainmenuButtonText.strokeThickness = 2;

    this.mainmenuButton.events.onInputUp.add(function() {this.mainmenuButtonText.fill = this.textGradient;}, this);
    this.mainmenuButton.events.onInputDown.add(function() {this.mainmenuButtonText.fill = '#eceb4e';}, this);
    this.mainmenuButton.events.onInputOver.add(function() {this.mainmenuButtonText.fill = '#7a1a2f';}, this);
    this.mainmenuButton.events.onInputOut.add(function() {this.mainmenuButtonText.fill = this.textGradient;}, this);

    // // add our start button with a callback
    // this.homeButton = this.game.add.button(this.baseX, this.baseY + 100, 'home', this.homeClick, this);
    // this.homeButton.anchor.setTo(0.5,0.5);
    //
    // this.add(this.homeButton);

    this.y = this.game.height;
    this.x = 0;
};

Pauseboard.prototype = Object.create(Phaser.Group.prototype);
Pauseboard.prototype.constructor = Pauseboard;

Pauseboard.prototype.update = function() {

};


Pauseboard.prototype.switchSound = function () {
    this.game.soundMute = !this.game.soundMute;
    if (!this.game.soundMute) {
        this.game.sound.setMute(true);
        this.soundButton.setFrames(0);
    } else {
        this.game.sound.setMute(false);
        this.soundButton.setFrames(1);
    }
};

Pauseboard.prototype.show = function() {
    this.game.add.tween(this).to({y: this.game.height / 2 - this.baseY - this.game.paddingBot}, 1000, Phaser.Easing.Bounce.Out, true);
};

Pauseboard.prototype.startClick = function() {
    this.y = this.game.height;
};

Pauseboard.prototype.restartClick = function() {
    if (!this.game.soundMute) {
        this.game.menuSelect.play();
    }
    this.game.state.start('Game');
};

Pauseboard.prototype.homeClick = function() {
    if (!this.game.soundMute) {
        this.game.menuSelect.play();
    }
    this.game.state.start('MainMenu');
};