import { Level } from "../Level.js";
import { Player } from "../objects/Player.js";
import { Rectangle } from "../objects/Rectangle.js";
import { Box } from "../objects/Box.js";
import { Goal } from "../objects/Goal.js";

export const level11 = new Level({
    size: [800, 600],
    objects: [
        new Goal({ pos: [600, 560], size: [40, 40], color: "red"}),
        new Player({ pos: [30, 560], size: [40, 40] }),
        
    ],
});
