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
import { level52 } from "./levels/level52.js";
import { level53 } from "./levels/level53.js";
import { level54 } from "./levels/level54.js";
import { level55 } from "./levels/level55.js";
import { level56 } from "./levels/level56.js";
import { level57 } from "./levels/level57.js";
import { level58 } from "./levels/level58.js";
import { level59 } from "./levels/level59.js";
import { level60 } from "./levels/level60.js";
import { level61 } from "./levels/level61.js";
import { level62 } from "./levels/level62.js";
import { level63 } from "./levels/level63.js";
import { level64 } from "./levels/level64.js";
import { level65 } from "./levels/level65.js";
import { level66 } from "./levels/level66.js";
import { level67 } from "./levels/level67.js";
import { level68 } from "./levels/level68.js";
import { level69 } from "./levels/level69.js";
import { level70 } from "./levels/level70.js";
import { level71 } from "./levels/level71.js";
import { level72 } from "./levels/level72.js";
import { level73 } from "./levels/level73.js";
import { level74 } from "./levels/level74.js";
import { level75 } from "./levels/level75.js";
import { level76 } from "./levels/level76.js";
import { level78 } from "./levels/level78.js";
import { level79 } from "./levels/level79.js";
import { level80 } from "./levels/level80.js";
import { level81 } from "./levels/level81.js";
import { level82 } from "./levels/level82.js";
import { level83 } from "./levels/level83.js";
import { level84 } from "./levels/level84.js";
import { level85 } from "./levels/level85.js";
import { level86 } from "./levels/level86.js";
import { level87 } from "./levels/level87.js";
import { level88 } from "./levels/level88.js";
import { level89 } from "./levels/level89.js";
import { level77 } from "./levels/level77.js";
import { level90 } from "./levels/level90.js";
import { level91 } from "./levels/level91.js";
import { level92 } from "./levels/level92.js";
import { level93 } from "./levels/level93.js";
import { level94 } from "./levels/level94.js";
import { level95 } from "./levels/level95.js";
import { level96 } from "./levels/level96.js";
import { level97 } from "./levels/level97.js";
import { level98 } from "./levels/level98.js";
import { level99 } from "./levels/level99.js";
import { level100 } from "./levels/level100.js";
import { level101 } from "./levels/level101.js";

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
            "Press Space to start the game or to pause.<br>" +
                "Press 'r' to restart the current level.<br>" 
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

export const game = new Game([
        level1,  level2, level3, level4, level5, level6, level7, level8, level9, 
        level10, level11, level12, level13, level14, level15, level16, level17, level18, level19,
        level20, level21, level22, level23, level24, level25, level26, level27, level28, level29, 
        level30, level31, level32, level33, level34, level35, level36, level37, level38, level39, 
        level40, level41, level42, level43, level44, level45,level46, level47, level48, level49, 
        level50, level51, level52, level53, level54, level55, level56, level57, level58, level59,
        level60, level61, level62, level63, level64, level65, level66, level67, level68, level69,
        level70, level71, level72, level73, level74, level75, level76,level77, level78, level79, 
        level80, level81, level82, level83, level84, level85, level86, level87, level88, level89,
        level90, level91, level92, level93, level94, level95, level96, level97, level98, level99,
        level100, level101]);
