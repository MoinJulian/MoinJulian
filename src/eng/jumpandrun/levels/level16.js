import { Level } from "../Level.js";
import { Player } from "../objects/Player.js";
import { Rectangle } from "../objects/Rectangle.js";
import { Box } from "../objects/Box.js";
import { Goal } from "../objects/Goal.js";

export const level16 = new Level({
  size: [800, 600],
  objects: [
    new Goal({ pos: [400, 50], size: [50, 50], color: "black" }),
    new Player({ pos: [20, 600], size: [40, 40] }),
    new Rectangle({ pos: [400, 50], size: [10, 50], color: "black" }),
    new Rectangle({ pos: [100, 400], size: [60, 10], color: "blue" }),
    new Rectangle({ pos: [0, 200], size: [60, 10], color: "blue" }),
  ],
});
