import {Population} from "./population.js";
import {start,goal} from "./point.js";
import {Rectangle} from "./rectangle.js";
export let pointAlpha = 0.5;

// CANVAS
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.lineWidth = 1;
ctx.strokeStyle = "black";

// POPULATION
let population = new Population(500,1000);
population.initialize();
population.draw(ctx);

// OBSTACLES
let obstacles = [];
obstacles.push(new Rectangle([400,400],[500,30],[0,0]));


// LOOP
let step = 0;
loop();

function loop() {

    // UPDATE
    obstacles.forEach(obstacle => obstacle.update(ctx));
    population.update(ctx,step,obstacles);
     
    // DRAW
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
    start.draw(ctx);
    goal.draw(ctx);    
    obstacles.forEach(obstacle => obstacle.draw(ctx));
    population.draw(ctx);

    step++;

    // REPRODUCTION
    if (step >= population.lifeSpan || population.done) {
        population.reproduce();
        obstacles.forEach(obstacle => obstacle.restart(ctx));
        step = 0;
    }

    requestAnimationFrame(loop);
}

// HIDE POINTS BY KEY INPUT
document.addEventListener("keydown",(e) => {
    if (e.key == "o") {
        pointAlpha = 0.5 - pointAlpha;
    }
});



