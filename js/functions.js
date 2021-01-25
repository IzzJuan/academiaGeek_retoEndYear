'use strict';
let flag = 0;
export function carColor() {
    let img = document.getElementById('carImg');
    const cars = ['img/Car 1.png', 'img/Car 2.png', 'img/Car 3.png']
    if (flag === 0) {
        flag++;
        img.src = cars[1];
    } else if (flag === 1) {
        flag++;
        img.src = cars[2];
    } else {
        flag = 0;
        img.src = cars[0];
    }
}

export function ranNum(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

export function arrivalsGenerator(arrivals, distance) {
    let arrival1 = 0; let arrival2 = 0; let arrival3 = 0;
    if (arrivals == 3) {
        arrival1 = Math.floor(ranNum(distance / 2, distance));
        arrival2 = Math.floor(ranNum(arrival1 / 2, arrival1));
        arrival3 = Math.floor(ranNum(arrival2 / 2, arrival2));
    } else if (arrivals == 2) {
        arrival1 = Math.floor(ranNum(distance / 2, distance));
        arrival2 = Math.floor(ranNum(arrival1 / 2, arrival1));
    } else {
        arrival1 = Math.floor(ranNum(distance / 2, distance));
    }
    let arrivalsDistance = [arrival1, arrival2, arrival3];
    return arrivalsDistance;
}