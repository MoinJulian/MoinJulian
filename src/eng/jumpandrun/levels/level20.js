import { Level } from "../Level.js";
import { Player } from "../objects/Player.js";
import { Rectangle } from "../objects/Rectangle.js";
import { Box } from "../objects/Box.js";
import { Goal } from "../objects/Goal.js";

export const level20 = new Level({
  size: [800, 600],
  objects: [
    new Player({ pos: [0, 600], size: [40, 40] }),
    new Rectangle({ pos: [100, 500], size: [10, 100], color: "blue" }),
    new Rectangle({ pos: [100, 500], size: [50, 10], color: "blue" }),
    new Rectangle({ pos: [150, 460], size: [10, 50], color: "blue" }),
    new Rectangle({ pos: [150, 450], size: [50, 10], color: "blue" }),
    new Rectangle({ pos: [200, 450], size: [10, 100], color: "blue" }),
    new Box({ pos: [200, 550], size: [10, 50], color: "blue" }),
    new Goal({ pos: [120, 560], size: [40, 40], color: "black" }),
  ],
});
