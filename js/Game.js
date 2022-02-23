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

export const game = new Game([level1, level2, level3, level4, level5, level6, level7, level8, level9, level10, level11]);
