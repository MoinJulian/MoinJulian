import {Point} from "./point.js";
import {add,multiply} from "./helper.js";

export class Population {

    constructor(lifeSpan,size) {

        this.lifeSpan = lifeSpan;
        this.size = size;
        this.points = [];
        this.generation = 1;
        this.successRate = 0;
        this.done = false;
        this.stepRecord = lifeSpan;        
        this.failNumber = 0;
        this.bestPoint = null;

    }

    initialize() {

        this.points = [];

        for (let i = 0; i < this.size; i++) {
            let point = new Point(this.lifeSpan);
            point.randomizeDNA();
            this.points.push(point);
        }

    }

    update(ctx,step,obstacles) {

        this.points.forEach(point => {
            point.update(ctx,step,obstacles);
        });

        this.done = (step >= this.stepRecord) ||
            this.points.every(point => point.finished || point.dead);

    }

    draw(ctx) {

        this.points.forEach(point => point.draw(ctx));        
        this.drawInfoText(ctx);
    }

    drawInfoText(ctx) {


        ctx.fillStyle = "blue";
        ctx.font = "20px Verdana";
        
        ctx.textAlign = "left";
        ctx.fillText("Generation: " + this.generation, 10, ctx.canvas.height-10);

        ctx.textAlign = "right";
        ctx.fillText("Success rate: " + Math.ceil(this.successRate) + "%", ctx.canvas.width-10, ctx.canvas.height-10);

        ctx.textAlign = "center";
        ctx.fillText("Step record: " + this.stepRecord, ctx.canvas.width/2, ctx.canvas.height-10);

    }

    finishedPoints() {
        return this.points.filter(point => point.finished == true);
    }

    calculateFitnesses() {
        this.points.forEach(point => point.calculateFitness());
    }

    calculcateSuccessRate() {
        let finishers = this.points.filter(point => point.finished == true);
        this.successRate = 100 * finishers.length / this.size;
    }   
    
    calculateFailNumber() {
        if (this.successRate == 0) {
            this.failNumber++;
        }
        else {
            this.failNumber = 0;
        }
    }

    calculateBestPoint() {

        let bestIndex = 0;

        for (let j = 1; j < this.size; j++) {
            if (this.points[j].fitness > this.points[bestIndex].fitness) {
                bestIndex = j;
            }
        }

        this.bestPoint = this.points[bestIndex];

        if (this.bestPoint.finished) {
            this.stepRecord = Math.min(this.stepRecord, this.bestPoint.stepsToGoal);
        } 

    }

    bestPointCopy() {

        let bestPointCopy = new Point(this.lifeSpan);
        bestPointCopy.DNA = this.bestPoint.DNA;
        bestPointCopy.color = "red";
        bestPointCopy.hideable = false;
        return bestPointCopy;
    }


    naturalSelection() {

        let totalSum = this.points.reduce(
            (partialSum, point) => partialSum + point.fitness, 0 );

        let randomPick = Math.random() * totalSum;
        let i = -1;
        let currentSum = 0;

        while (currentSum <= randomPick) {
            i++;
            currentSum += this.points[i].fitness;
        }

        return this.points[i];

    }

    reproduce() {

        this.calculateFitnesses();
        this.calculateBestPoint();
        this.calculcateSuccessRate();
        this.calculateFailNumber();

        let newpoints = []; 
                
        for (let s = 0; s < this.size-1; s++) {

            let parent1 = this.naturalSelection();
            let parent2 = this.naturalSelection();
            let DNA1 = parent1.DNA; 
            let DNA2 = parent2.DNA;   

            let child = new Point(this.lifeSpan);

            for (let i = 0; i < DNA1.length; i++) {
                child.DNA[i] = multiply(add(DNA1[i],DNA2[i]),0.5);
            }

            newpoints.push(child);

        }  

        let factor = 1 + this.failNumber/10;
        let rate = Math.min(0.5, 0.01 + 0.01 * this.failNumber/10);
 
        this.mutate(newpoints,factor,rate);   
        
        newpoints.push(this.bestPointCopy());

        this.points = newpoints;
        
        this.generation++;

    }

    mutate(newpoints,factor,rate) {  
        newpoints.forEach(point => point.mutate(factor,rate));
    }

}