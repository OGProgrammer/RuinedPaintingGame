<?php
// Debug shit
error_reporting(E_ALL);
ini_set("display_errors", 1);

header("Access-Control-Allow-Origin: *");
?>
<!DOCTYPE HTML>
<html>
<head>
	<title>The Ruined Painting Game</title>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="chrome=1, IE=9">
	<meta name="format-detection" content="telephone=no">
	<meta name="HandheldFriendly" content="true" />
	<meta name="robots" content="noindex,nofollow" />
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<meta name="apple-mobile-web-app-status-bar-style" content="black" />
	<meta name="apple-mobile-web-app-title" content="GA game">
	<meta name="viewport" content="initial-scale=1 maximum-scale=1 user-scalable=0 minimal-ui" />
	<link rel="apple-touch-icon" href="/apple-touch-icon.png">
	<!-- non-retina iPhone pre iOS 7 -->
	<link rel="apple-touch-icon" sizes="57x57" href="icons/app_icon_57x57.png">
	<link rel="apple-touch-icon" sizes="60x60" href="icons/app_icon_60x60.png">
	<!-- non-retina iPad pre iOS 7 -->
	<link rel="apple-touch-icon" sizes="72x72" href="icons/app_icon_72x72.png">
	<!-- non-retina iPad iOS 7 -->
	<link rel="apple-touch-icon" sizes="76x76" href="icons/app_icon_76x76.png">
	<!-- retina iPhone pre iOS 7 -->
	<link rel="apple-touch-icon" sizes="114x114" href="icons/app_icon_114x114.png">
	<!-- retina iPhone iOS 7 -->
	<link rel="apple-touch-icon" sizes="120x120" href="icons/app_icon_120x120.png">
	<!-- retina iPad pre iOS 7 -->
	<link rel="apple-touch-icon" sizes="144x144" href="icons/app_icon_144x144.png">
	<!-- retina iPad iOS 7 -->
	<link rel="apple-touch-icon" sizes="152x152" href="icons/app_icon_152x152.png">
	<link rel="apple-touch-icon" sizes="256x256" href="icons/app_icon_256x256.png">
	<link rel="apple-touch-icon" sizes="512x512" href="icons/app_icon_512x512.png">
	<link rel="apple-touch-icon" sizes="1024x1024" href="icons/app_icon_1024x1024.png">
	<link rel="stylesheet" href="css/stylesheet.css" type="text/css" charset="utf-8" />
	<script src="js/phaser.js"></script>
	<script src="config/season1.js"></script>
	<script src="src/Boot.js"></script>
	<script src="src/Preloader.js"></script>
	<script src="src/MainMenu.js"></script>
	<script src="src/Game.js"></script>
    <script src="src/DBInc.js"></script>
    <script src="src/Sponsor.js"></script>
    <script src="src/CheckOrientation.js"></script>
    <script src="src/Pauseboard.js"></script>
</head>
<body>

	<div id="dbinc_rp_game"></div>
	<div id="dbinc_rp_orientation"></div>

<script type="text/javascript">

(function () {

    var width = 960;
    var height = 640;

	//	Create your Phaser game and inject it into the game div.
	//	We did it in a window.onload event, but you can do it anywhere (requireJS load, anonymous function, jQuery dom ready, - whatever floats your boat)
	//	We're using a game size of 1024 x 768 here, but you can use whatever you feel makes sense for your game of course.
	var game = new Phaser.Game(width, height, Phaser.AUTO, 'dbinc_rp_game');

	//	Add the States your game has.
	//	You don't have to do this in the html, it could be done in your Boot state too, but for simplicity I'll keep it here.
	game.state.add('Boot', BasicGame.Boot);
    game.state.add('CheckOrientation', BasicGame.CheckOrientation);
    game.state.add('DBInc', BasicGame.DBInc);
    game.state.add('Sponsor', BasicGame.Sponsor);
	game.state.add('Preloader', BasicGame.Preloader);
	game.state.add('MainMenu', BasicGame.MainMenu);
	game.state.add('Game', BasicGame.Game);

	//	Now start the Boot state.
	game.state.start('Boot');

})();
</script>

</body>
</html>