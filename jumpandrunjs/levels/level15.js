import { Level } from "../Level.js";
import { Player } from "../objects/Player.js";
import { Rectangle } from "../objects/Rectangle.js";
import { Box } from "../objects/Box.js";
import { Goal } from "../objects/Goal.js";

export const level15 = new Level({
    size: [800, 600],
    objects: [
        new Player({ pos: [30, 1160], size: [40, 40] }),
    ],
});
