import { level1 } from "./levels/level1.js";
import { level2 } from "./levels/level2.js";
import { level3 } from "./levels/level3.js";
import { level4 } from "./levels/level4.js";
import { writeInfo } from "./info.js";
import { level5 } from "./levels/level5.js";
import { level6 } from "./levels/level6.js";
import { level7 } from "./levels/level7.js";
import { level8 } from "./levels/level8.js";
import { level9 } from "./levels/level9.js";
import { level10 } from "./levels/level10.js";
import { level11 } from "./levels/level11.js";
import { level12 } from "./levels/level12.js";
import { level13 } from "./levels/level13.js";
import { level14 } from "./levels/level14.js";
import { level15 } from "./levels/level15.js";
import { level16 } from "./levels/level16.js";
import { level17 } from "./levels/level17.js";
import { level18 } from "./levels/level18.js";
import { level19 } from "./levels/level19.js";
import { level20 } from "./levels/level20.js";
import { levelf } from "./levels/levelf.js";

const levelCount = document.getElementById("levelCount");

export class Game {
    constructor(levelList) {
        this.levelList = [];
        for (const lev of levelList) {
            this.levelList.push(lev);
            lev.game = this;
            lev.index = this.levelList.length;
        }
        this.currentLevelIndex = 1;
    }

    get currentLevel() {
        return this.levelList[this.currentLevelIndex - 1];
    }

    start() {
        if (this.levelList.length === 0) return;
        this.currentLevel.drawObjects();
        this.currentLevel.addControls();
        levelCount.innerText = "Level " + this.currentLevelIndex;
        writeInfo(
            "Press 'Space' to start or pause the game.<br>" +
                "Press 'r' to restart the level.<br>" +
                "If you reach the black Goal you come into the next level!"
        );
    }

    switchToNextLevel() {
        this.currentLevelIndex++;
        if (this.currentLevelIndex > this.levelList.length) {
            writeInfo("(:<br>" + "You won the game!<br>" + "(:");
            return;
        }
        levelCount.innerText = "Level " + this.currentLevelIndex;
        this.currentLevel.addControls();
        this.currentLevel.start();
    }
}

export const game = new Game([level1, level2, level3, level4, level5, level6, level7, 
        level8, level9, level10, level11, level12, level13, level14, level15, level16, 
         level17, level18, level19,level20, levelf]);
