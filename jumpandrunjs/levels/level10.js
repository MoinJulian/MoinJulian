import { Level } from "../Level.js";
import { Player } from "../objects/Player.js";
import { Rectangle } from "../objects/Rectangle.js";
import { Box } from "../objects/Box.js";
import { Goal } from "../objects/Goal.js";

export const level10 = new Level({
    size: [800, 600],
    objects: [
        new Rectangle({ pos: [400, 300], size: [50, 100]}),
        new Player({ pos: [0, 600], size: [40, 40] }),
        new Box({ pos: [800, 0], size: [40, 40]}),
    ],
});
