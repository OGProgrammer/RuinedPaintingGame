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
        "name": "up_button",
        "src": "resources/sprites/up-button-sprite.png",
        "height": 87,
        "width": 300
    },
    {
        "name": "fs_button",
        "src": "resources/sprites/fs-button-sprite.png",
        "height": 26,
        "width": 87
    },
    {
        "name": "vol_button",
        "src": "resources/sprites/volume-sprite.png",
        "height": 22,
        "width": 25
    }
];

/**
 * Backgrounds
 */
var rpBackgrounds = [
    {
        "name": "outside_seaside",
        "src": "resources/scenes/seaside.png"
    },
    {
        "name": "outside_castle",
        "src": "resources/scenes/seaside.png"
    },
    {
        "name": "outside_seaside",
        "src": "resources/scenes/seaside.png"
    },
    {
        "name": "outside_seaside",
        "src": "resources/scenes/seaside.png"
    },
    {
        "name": "outside_seaside",
        "src": "resources/scenes/seaside.png"
    },
    {
        "name": "outside_seaside",
        "src": "resources/scenes/seaside.png"
    },
    {
        "name": "outside_seaside",
        "src": "resources/scenes/seaside.png"
    }
];

/**
 * This mapping is how the buttons are shown.
 * @type {{map_name: {up, right, down, left}}}
 */
var gameZorkNaviMap = {
    "outside_seaside": {
        "up": {
            "btn": false
        },
        "right": {
            "btn": false
        },
        "down": {
            "btn": true,
            "soundfx": "step_outside",
            "goto": "outside_castle"
        },
        "left": {
            "btn": false
        },
        "music": "outside_seaside",
        "bg_src": "resources/sprites/seaside.png"
    },
    "outside_castle": {
        "up": {
            "btn": true,
            "soundfx": "step_outside",
            "goto": "outside_castle_near"
        },
        "right": {
            "btn": false
        },
        "down": {
            "btn": true,
            "soundfx": "step_outside",
            "goto": "outside_seaside"
        },
        "left": {
            "btn": false
        },
        "music": "outside_seaside",
        "bg_src": "outside_castle"
    },
    "outside_castle_near": {
        "up": {
            "btn": true,
            "soundfx": "step_outside",
            "goto": "outside_castle_door"
        },
        "right": {
            "btn": false
        },
        "down": {
            "btn": true,
            "soundfx": "step_outside",
            "goto": "outside_castle"
        },
        "left": {
            "btn": false
        },
        "music": "outside_eerie",
        "bg_src": "resources/sprites/castle_near.png"
    },
    "outside_castle_door": {
        "up": {
            "btn": false
        },
        "right": {
            "btn": true,
            "soundfx": "step_outside",
            "goto": "castle_deadend_up"
        },
        "down": {
            "btn": false
        },
        "left": {
            "btn": true,
            "soundfx": "step_outside",
            "goto": "outside_castle_near"
        },
        "music": "outside_eerie",
        "bg_src": "resources/sprites/castle_door.png"
    },
    "castle_deadend_up": {
        "up": {
            "btn": false
        },
        "right": {
            "btn": false
        },
        "down": {
            "btn": false
        },
        "left": {
            "btn": true,
            "soundfx": "step_outside",
            "goto": "outside_castle_near"
        },
        "music": "outside_eerie",
        "bg_src": "resources/sprites/castle_deadend_up.png"
    }
};
