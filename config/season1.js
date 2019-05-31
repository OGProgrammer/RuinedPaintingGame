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
    },
    {
        "name": "inside_castle_entrance",
        "src": "resources/scenes/inside_castle_entrance.jpg"
    },
    {
        "name": "outside_castle_door",
        "src": "resources/scenes/outside_castle_door.jpg"
    },
    {
        "name": "outside_castle_gate",
        "src": "resources/scenes/outside_castle_gate.jpg"
    },
    {
        "name": "outside_castle_gate_out",
        "src": "resources/scenes/outside_castle_gate_out.jpg"
    },
    {
        "name": "outside_courtyard",
        "src": "resources/scenes/outside_courtyard.jpg"
    },
    {
        "name": "outside_courtyard_side",
        "src": "resources/scenes/outside_courtyard_side.jpg"
    },
    {
        "name": "outside_deadend_window",
        "src": "resources/scenes/outside_deadend_window.jpg"
    },
    {
        "name": "outside_courtyard_deadend",
        "src": "resources/scenes/outside_courtyard_deadend.jpg"
    },
    {
        "name": "outside_courtyard_wall",
        "src": "resources/scenes/outside_courtyard_wall.jpg"
    },
    {
        "name": "outside_courtyard_wall_deadend",
        "src": "resources/scenes/outside_courtyard_wall_deadend.jpg"
    },
    {
        "name": "inside_purple_bedroom",
        "src": "resources/scenes/inside_purple_bedroom.jpg"
    }
];

/**
 * img_
 * This mapping is how the buttons are shown.
 * @type {{map_name: {up, right, down, left}}}
 */
var rpGameMap = {
    "start": "outside_seaside",
    "outside_seaside": {
        "title": "Seaside",
        "narrator": "Now is my chance to steal the painting while the kingdom celebrates in town...",
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
        "title": "Field",
        "narrator": "There's the castle...",
        "forward": {
            "btn": true,
            "soundfx": "step_outside",
            "goto": "outside_castle_gate_out"
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
    },
    "outside_castle_gate_out": {
        "title": "Castle Wall",
        "narrator": "Wow, there's no guards... too easy...",
        "forward": {
            "btn": true,
            "soundfx": "step_outside",
            "goto": "outside_castle_gate"
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
        "bg_src": "outside_castle_gate_out"
    },
    "outside_castle_gate": {
        "title": "Castle Gate",
        "narrator": "Ok, now I just gotta find the door...",
        "forward": {
            "btn": false
        },
        "right": {
            "btn": true,
            "soundfx": "step_outside",
            "goto": "outside_courtyard_side"
        },
        "back": {
            "btn": true,
            "soundfx": "step_outside",
            "goto": "outside_courtyard"
        },
        "left": {
            "btn": true,
            "soundfx": "step_outside",
            "goto": "outside_castle_gate_out"
        },
        "music": "outside_seaside",
        "bg_src": "outside_castle_gate"
    },
    "outside_courtyard": {
        "title": "Courtyard",
        "narrator": "...",
        "forward": {
            "btn": true,
            "soundfx": "step_outside",
            "goto": "outside_courtyard_wall_deadend"
        },
        "right": {
            "btn": true,
            "soundfx": "step_outside",
            "goto": "outside_courtyard_deadend"
        },
        "back": {
            "btn": true,
            "soundfx": "step_outside",
            "goto": "outside_castle_gate"
        },
        "left": {
            "btn": true,
            "soundfx": "step_outside",
            "goto": "outside_courtyard_side"
        },
        "music": "outside_seaside",
        "bg_src": "outside_courtyard"
    },
    "outside_courtyard_side": {
        "title": "Side Courtyard",
        "narrator": "I feel like I'm getting close...",
        "forward": {
            "btn": true,
            "soundfx": "step_outside",
            "goto": "outside_courtyard_wall"
        },
        "right": {
            "btn": true,
            "soundfx": "step_outside",
            "goto": "outside_castle_door"
        },
        "back": {
            "btn": true,
            "soundfx": "step_outside",
            "goto": "outside_castle_gate"
        },
        "left": {
            "btn": false
        },
        "music": "outside_seaside",
        "bg_src": "outside_courtyard_side"
    },
    "outside_castle_door": {
        "title": "Castle Door",
        "narrator": "There's the door and look, they even left it open for me... haha!",
        "forward": {
            "btn": true,
            "soundfx": "step_outside",
            "goto": "inside_castle_entrance"
        },
        "right": {
            "btn": false
        },
        "back": {
            "btn": true,
            "soundfx": "step_outside",
            "goto": "outside_castle_gate"
        },
        "left": {
            "btn": false
        },
        "music": "outside_seaside",
        "bg_src": "outside_castle_door"
    },
    "outside_courtyard_wall_deadend": {
        "title": "Dead End",
        "narrator": "Ah, this isn't the way... I've got to go back.",
        "forward": {
            "btn": false
        },
        "right": {
            "btn": false
        },
        "back": {
            "btn": true,
            "soundfx": "step_outside",
            "goto": "outside_courtyard"
        },
        "left": {
            "btn": false
        },
        "music": "outside_seaside",
        "bg_src": "outside_courtyard_wall_deadend"
    },
    "outside_deadend_window": {
        "title": "Dead End",
        "narrator": "It's a dead end... I've got to find another way.",
        "forward": {
            "btn": false
        },
        "right": {
            "btn": false
        },
        "back": {
            "btn": true,
            "soundfx": "step_outside",
            "goto": "outside_courtyard_wall"
        },
        "left": {
            "btn": false
        },
        "music": "outside_seaside",
        "bg_src": "outside_deadend_window"
    },
    "outside_courtyard_wall": {
        "title": "Wall Tunnel",
        "narrator": "Hum... wonder where this tunnel goes.",
        "forward": {
            "btn": true,
            "soundfx": "step_outside",
            "goto": "outside_deadend_window"
        },
        "right": {
            "btn": false
        },
        "back": {
            "btn": true,
            "soundfx": "step_outside",
            "goto": "outside_courtyard_side"
        },
        "left": {
            "btn": false
        },
        "music": "outside_seaside",
        "bg_src": "outside_courtyard_wall"
    },
    "outside_courtyard_deadend": {
        "title": "Dead End",
        "narrator": "This isn't the way into the castle... I've got to retrace my steps.",
        "forward": {
            "btn": false
        },
        "right": {
            "btn": false
        },
        "back": {
            "btn": true,
            "soundfx": "step_outside",
            "goto": "outside_courtyard"
        },
        "left": {
            "btn": false
        },
        "music": "outside_seaside",
        "bg_src": "outside_courtyard_deadend"
    },
    "inside_castle_entrance": {
        "title": "Main Hall",
        "narrator": "I can't believe no one is here. It's almost too quite...",
        "forward": {

            "btn": true,
            "soundfx": "step_outside",
            "goto": "inside_purple_bedroom"
        },
        "right": {
            "btn": true,
            "soundfx": "step_outside",
            "goto": "inside_purple_bedroom"
        },
        "back": {
            "btn": true,
            "soundfx": "step_outside",
            "goto": "outside_castle_door"
        },
        "left": {
            "btn": false
        },
        "music": "outside_seaside",
        "bg_src": "outside_courtyard_deadend"
    },
    "inside_purple_bedroom": {
        "title": "The Purple Bedroom",
        "narrator": "Wow...that bed is so nice. I wish that I was a king...",
        "forward": {
            "btn": false
        },
        "right": {
            "btn": false
        },
        "back": {
            "btn": true,
            "soundfx": "step_outside",
            "goto": "inside_castle_entrance"
        },
        "left": {
            "btn": false
        },
        "music": "outside_eerie",
        "bg_src": "inside_purple_bedroom"
    },
    "inside_castle_church": {
        "title": "The Chapel",
        "narrator": "Wow...that bed is so nice. I wish that I was a king...",
        "forward": {
            "btn": false
        },
        "right": {
            "btn": false
        },
        "back": {
            "btn": true,
            "soundfx": "step_outside",
            "goto": "inside_castle_entrance"
        },
        "left": {
            "btn": false
        },
        "music": "outside_eerie",
        "bg_src": "inside_purple_bedroom"
    }
};
