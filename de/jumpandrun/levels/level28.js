import { Level } from "../Level.js";
import { Player } from "../objects/Player.js";
import { Rectangle } from "../objects/Rectangle.js";
import { Box } from "../objects/Box.js";
import { Goal } from "../objects/Goal.js";

export const level28 = new Level({
  size: [800, 1200],
  objects: [
    new Rectangle({ pos: [750, 1150], size: [50, 50], color: "black" }),
    new Rectangle({ pos: [400, 1100], size: [10, 50], color: "blue" }),
    new Goal({ pos: [400, 1150], size: [10, 50], color: "blue" }),
    new Player({ pos: [30, 1160], size: [40, 40] }),
  ],
});
