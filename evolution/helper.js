export function add(a,b) {
    if (a.length == b.length) {
        let c = [];
        for (let i = 0; i < a.length; i++) {
            c[i] = a[i] + b[i];
        }
        return c;
    }
    else {
        return new Error("Lengths do not match!");
    }    
}

export function multiply(a,r) {
    return a.map(x => r * x);
}


export function limit(coord,maximalLength) {
    let origin = coord.map(x => 0);
    let d = Math.sqrt(squareDistance(coord,origin));
    if (d > maximalLength) {
        return multiply(coord,maximalLength/d); 
    }
    else {
        return coord;
    }
}

export function squareDistance(a,b) {
    if (a.length == b.length) {
        let distance = 0;
        for (let i = 0; i < a.length; i++) {
            distance += Math.pow(a[i] - b[i],2);
        }
        return distance;
    }
    else {
        return new Error("Lengths do not match!");
    }
}

