import { Level } from "../Level.js";
import { Player } from "../objects/Player.js";
import { Rectangle } from "../objects/Rectangle.js";
import { Box } from "../objects/Box.js";
import { Goal } from "../objects/Goal.js";

export const level10 = new Level({
    size: [800, 600],
    objects: [
        new Goal({ pos: [760, 560], size: [40, 40], color:"#eee"}),
        new Rectangle({ pos: [400, 550], size: [10, 50], color: "#eee"}),
        new Player({ pos: [0, 600], size: [40, 40] }),
    ],
});
