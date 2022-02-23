import { Level } from "../Level.js";
import { Player } from "../objects/Player.js";
import { Rectangle } from "../objects/Rectangle.js";
import { Box } from "../objects/Box.js";
import { Goal } from "../objects/Goal.js";

export const level11 = new Level({
    size: [800, 1200],
    objects: [
        new Goal({ pos: [400, 1160], size: [40, 40], color: "white" }),
        new Player({ pos: [400, 1160], size: [40, 40] }),
        
    ],
});
