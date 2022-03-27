import { Level } from "../Level.js";
import { Player } from "../objects/Player.js";
import { Rectangle } from "../objects/Rectangle.js";
import { Box } from "../objects/Box.js";
import { Goal } from "../objects/Goal.js";

export const level35 = new Level({
  size: [800, 600],
  objects: [
    new Player({ pos: [0, 600], size: [40, 40] }),
    new Goal({ pos: [650, 200], size: [50, 50], color: "black" }),
    new Rectangle({ pos: [630, 250], size: [90, 10], color: "blue" }), //Rechteck unter dem Goal
    new Rectangle({ pos: [550, 50], size: [10, 500], color: "gray" }),
    new Box({ pos: [550, 550], size: [10, 60], color: "gray" }),
    new Rectangle({ pos: [560, 350], size: [40, 10], color: "blue" }),
  ],
});
