// import {add} from "./helper.js";

export class Rectangle {

    constructor(pos,size,vel) {

        this.pos = pos;
        this.size = size;
        this.vel = vel;
        this.originalpos = pos;
        this.originalvel = vel;
        this.color = "#555"; 

    }

    draw(ctx) {

        ctx.fillStyle = this.color;
        ctx.fillRect(this.pos[0],this.pos[1],this.size[0],this.size[1]);

    }

    update(ctx) {

        // this.pos = add(this.pos,this.vel);
        // if (this.pos[0] < 0) {
        //     this.pos[0] = 0;
        //     this.vel[0] = -this.vel[0];
        // }
        // else if (this.pos[0] + this.size[0] > ctx.canvas.width) {
        //     this.pos[0] = ctx.canvas.width - this.size[0];
        //     this.vel[0] = -this.vel[0];
        // }

        // if (this.pos[1] < 0) {
        //     this.pos[1] = 0;
        //     this.vel[1] = -this.vel[1];
        // }
        // else if (this.pos[1] + this.size[1] > ctx.canvas.height) {
        //     this.pos[1] = ctx.canvas.height - this.size[1];
        //     this.vel[1] = -this.vel[1];
        // }
        return;

    }

    restart() {

        this.pos = this.originalpos;
        this.vel = this.originalvel;

    }

    contains(point) {

        return (point.pos[0] + point.size >= this.pos[0] &&
                point.pos[0] <= this.pos[0] + this.size[0] + point.size &&
                point.pos[1] + point.size >= this.pos[1]  &&
                point.pos[1] <= this.pos[1] + this.size[1] + point.size);
                
    }

}