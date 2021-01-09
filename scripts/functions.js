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