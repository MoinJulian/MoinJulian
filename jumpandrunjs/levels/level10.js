import { Level } from "../Level.js";
import { Player } from "../objects/Player.js";
import { Rectangle } from "../objects/Rectangle.js";
import { Box } from "../objects/Box.js";
import { Goal } from "../objects/Goal.js";

export const level10 = new Level({
    size: [800, 600],
    objects: [
        new Player({ pos: [0, 600], size: [30, 30] }),
        new Goal({pos: [0, 0], size: [50, 50], color: "black"}),
        new Rectangle({ pos: [0, 550], size: [760, 10], color: "blue"}),
        new Rectangle({ pos: [40, 500], size: [760, 10], color: "blue"}),
        new Rectangle({ pos: [0, 450], size: [760, 10], color: "blue"}),
        new Rectangle({ pos: [40, 400], size: [760, 10], color: "blue"}),
        new Rectangle({ pos: [0, 350], size: [760, 10], color: "blue"}),
        new Rectangle({ pos: [40, 300], size: [760, 10], color: "blue"}),
        new Rectangle({ pos: [0, 250], size: [760, 10], color: "blue"}),
        new Rectangle({ pos: [40, 200], size: [760, 10], color: "blue"}),
        new Rectangle({ pos: [0, 150], size: [760, 10], color: "blue"}),
        new Rectangle({ pos: [40, 100], size: [760, 10], color: "blue"}),
        new Rectangle({ pos: [0, 50], size: [760, 10], color: "blue"}),
        new Rectangle({ pos: [0, -10], size: [800, 10], color: "blue"}),
    ],
});
