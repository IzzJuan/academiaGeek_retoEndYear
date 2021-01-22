'use strict';
import Car from './car.js';
import { carColor } from './functions.js';

let auto = new Car('Azul');

document.onkeypress = function (e) {
    console.log(e.key);
    switch (e.key) {
        case 'Enter':
            auto.Start();
            break;
        case '\\':
            auto.ShutDown();
            break;
        case 'w':
            auto.Accelerate();
            break;
        case 's':
            auto.Stop();
            break;
        case 'c':
            carColor();
            break;
        case '1':
        case '2':
        case '3':
        case '4':
            auto.Gearbox(e.key);
            break;
        case 'q':
        case 'e':
            auto.TurnLight(e.key);
            break;
        case ' ':
            auto.HandBrake();
            break;
        default:
            alert('Digite una tecla valida')
            break;
    }
};


