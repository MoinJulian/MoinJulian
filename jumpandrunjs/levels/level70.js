import { Level } from "../Level.js";
import { Player } from "../objects/Player.js";
import { Rectangle } from "../objects/Rectangle.js";
import { Box } from "../objects/Box.js";
import { Goal } from "../objects/Goal.js";

export const level70 = new Level({
    size: [800, 600],
    objects: [
        new Player({ pos: [0, 600], size: [40, 40] }),
        new Rectangle({pos: [60, 400], size: [10, 200], color: "blue"}),
        new Rectangle({pos: [120, 400], size: [10, 10], color: "blue"}),
        new Rectangle({pos: [180, 400], size: [10, 10], color: "blue"}),
        new Rectangle({pos: [240, 400], size: [10, 10], color: "blue"}),
        new Rectangle({pos: [300, 400], size: [10, 10], color: "blue"}),
        new Rectangle({pos: [360, 400], size: [10, 10], color: "blue"}),
        new Rectangle({pos: [420, 400], size: [10, 10], color: "blue"}),
        new Rectangle({pos: [480, 400], size: [10, 10], color: "blue"}),
        new Rectangle({pos: [540, 400], size: [10, 10], color: "blue"}),
        new Rectangle({pos: [600, 400], size: [10, 10], color: "blue"}),
        new Rectangle({pos: [660, 400], size: [10, 10], color: "blue"}),
        new Rectangle({pos: [720, 400], size: [10, 10], color: "blue"}),
        new Rectangle({pos: [740, 150], size: [10, 450], color: "blue"}),
        new Goal({pos: [760, 560], size: [40, 40], color: "black"})
    ],
});
