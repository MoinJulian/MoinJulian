import {squareDistance, limit, add} from "./helper.js";
import {pointAlpha} from "./evolution.js";

const startpos = [640,600];
 
export class Point {

    constructor(lifeSpan) {

        this.lifeSpan = lifeSpan;
        this.pos = startpos; 
        this.vel = [0,0];
        this.size = 3;
        this.finished = false;
        this.fitness = null;
        this.stepsToGoal = null;
        this.color = "rgb(0,100,255)";
        this.DNA = [];
        this.dead = false;
        this.maximalSpeed = 10;
        this.hideable = true;
        
    }

    randomizeDNA() {
        for (let s = 0; s < this.lifeSpan; s++) {
            this.DNA[s] = [2 * (Math.random() - 0.5), 2 * (Math.random() - 0.5)];
        }
    }

    update(ctx,step,obstacles) {

        if (this.dead || this.finished) {
            return;
        }

        if (obstacles.some(obstacle => obstacle.contains(this))) {
            this.dead = true;
            return;
        }

        if (this.pos[0] < this.size || this.pos[0] + this.size > ctx.canvas.width ||
            this.pos[1] < this.size || this.pos[1] + this.size > ctx.canvas.height) {
                this.dead = true;
                return;
        }        


        this.vel = add(this.vel,this.DNA[step]);
        this.vel = limit(this.vel,this.maximalSpeed);
        this.pos = add(this.pos,this.vel);

        if (squareDistance(this.pos,goal.pos) < Math.pow(goal.size,2)) {
            this.finished = true;
            this.stepsToGoal = step;
        }
        
    }

    draw(ctx) {
        if (this.hideable && pointAlpha == 0) return;
        if (this.hideable) ctx.globalAlpha = pointAlpha;        
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.pos[0],this.pos[1],this.size,0,2*Math.PI,false);
        ctx.fill();
        ctx.stroke();
        ctx.globalAlpha = 1;
    }

    calculateFitness() {

        let myFitness;

        if (this.finished) {
            myFitness = 100 + Math.pow(this.lifeSpan - this.stepsToGoal,2);
        }
        else {
            myFitness = 1 / (1 + squareDistance(this.pos, goal.pos));
        }

        this.fitness = myFitness;
    }

    mutate(factor,rate) {

        for (let i = 0; i < this.lifeSpan; i++) {
            if (Math.random() < rate) {
                this.DNA[i][0] += factor * (Math.random() - 0.5);
                this.DNA[i][1] += factor * (Math.random() - 0.5);
            }            
        }
        
    }
}


export const goal = new Point();
goal.pos = [640,100];
goal.size = 20;
goal.color = "green";
goal.hideable = false;

export const start = new Point();
start.pos = startpos;
start.size = 10;
start.color = "yellow";
start.hideable = false;
