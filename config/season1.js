/**
 * Music
 */
var rpMusicMap = [
    {
        "name": "intro",
        "src": [
            'resources/music/theme.mp3',
            'resources/music/theme.ogg'
        ]
    },
    {
        "name": "outside_seaside",
        "src": [
            'resources/music/seaside.mp3',
            'resources/music/seaside.ogg'
        ]
    },
    {
        "name": "outside_eerie",
        "src": [
            'resources/music/outside_eerie.mp3',
            'resources/music/outside_eerie.ogg'
        ]
    }
];

/**
 * SoundFx
 */
var rpSoundFxMap = [
    {
        "name": "step_outside",
        "src": [
            'resources/sounds/step_outside.mp3',
            'resources/sounds/step_outside.ogg'
        ]
    }
];

/**
 * Buttons
 */
var rpButtonsMap = [
    {
        "name": "moveButton",
        "src": "resources/sprites/up-button-sprite.png",
        "height": 87,
        "width": 300
    },
    {
        "name": "fullscreenButton",
        "src": "resources/sprites/fullscreen_button.png",
        "height": 26,
        "width": 87
    }
];

/**
 * Backgrounds
 */
var rpBackgrounds = [
    {
        "name": "outside_seaside",
        "src": "resources/scenes/outside_seaside.jpg"
    },
    {
        "name": "outside_castle",
        "src": "resources/scenes/outside_castle.jpg"
    }
];

/**
 * This mapping is how the buttons are shown.
 * @type {{map_name: {up, right, down, left}}}
 */
var rpGameMap = {
    "start": "outside_seaside",
    "outside_seaside": {
        "forward": {
            "btn": false
        },
        "right": {
            "btn": false
        },
        "back": {
            "btn": true,
            "soundfx": "step_outside",
            "goto": "outside_castle"
        },
        "left": {
            "btn": false
        },
        "music": "outside_seaside",
        "scene": "outside_seaside"
    },
    "outside_castle": {
        "forward": {
            "btn": true,
            "soundfx": "step_outside",
            "goto": "outside_castle_near"
        },
        "right": {
            "btn": false
        },
        "back": {
            "btn": true,
            "soundfx": "step_outside",
            "goto": "outside_seaside"
        },
        "left": {
            "btn": false
        },
        "music": "outside_seaside",
        "bg_src": "outside_castle"
    }
};
