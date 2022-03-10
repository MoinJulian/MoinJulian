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
import { level21 } from "./levels/level21.js";
import { level22 } from "./levels/level22.js";
import { level23 } from "./levels/level23.js";
import { level24 } from "./levels/level24.js";
import { level25 } from "./levels/level25.js";
import { level26 } from "./levels/level26.js";
import { level27 } from "./levels/level27.js";
import { level28 } from "./levels/level28.js";
import { level29 } from "./levels/level29.js";
import { level30 } from "./levels/level30.js";
import { level32 } from "./levels/level32.js";
import { level33 } from "./levels/level33.js";
import { level31 } from "./levels/level31.js";
import { level34 } from "./levels/level34.js";
import { level35 } from "./levels/level35.js";
import { level36 } from "./levels/level36.js";
import { level37 } from "./levels/level37.js";
import { level38 } from "./levels/level38.js";
import { level39 } from "./levels/level39.js";
import { level40 } from "./levels/level40.js";
import { level51 } from "./levels/level51.js";
import { level41 } from "./levels/level41.js";
import { level42 } from "./levels/level42.js";
import { level43 } from "./levels/level43.js";
import { level44 } from "./levels/level44.js";
import { level45 } from "./levels/level45.js";
import { level46 } from "./levels/level46.js";
import { level47 } from "./levels/level47.js";
import { level48 } from "./levels/level48.js";
import { level49 } from "./levels/level49.js";
import { level50 } from "./levels/level50.js";

const levelCount = document.getElementById("levelCount");

export class Game {
    constructor(levelList) {
        this.levelList = [];
        for (const lev of levelList) {
            this.levelList.push(lev);
            lev.game = this;
            lev.index = this.levelList.length;
        }
        this.currentLevelIndex = 10;
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

export const game = new Game([level1, level2, level3, level4, level5, level6, level7, level8, level9,
         
        level10,level11, level12, level13, level14, level15, level16, 
        level17, level18, level19,level20, level21, level22, level23, level24, level25, level26, 
        level27, level28, level29, level30, level31, level32, level33, level34, level35, level36, 
        level37, level38, level39, level40, level41, level42, level43, level44, level45,
        level46, level47, level48, level49, level50,
        level51]);
