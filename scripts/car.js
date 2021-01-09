'use strict';
import { ranNum } from './functions.js';
let surface = document.getElementById('surface').classList;
let car = document.getElementById('car').classList;
let cjaCambios = document.getElementById('caja_de_cambios');
let cityWall = document.getElementById('wallpaper').classList;
let handBrake = document.getElementById('handBrake').classList;
let destiny = document.getElementById('destiny');
const gearBox = ['/img/caja_de_cambios/automatico/d.png', '/img/caja_de_cambios/automatico/n.png', '/img/caja_de_cambios/automatico/r.png', '/img/caja_de_cambios/automatico/p.png']
let arrivals; let distance; let arrivalsTime; let checker = 0;

export default class Car {
    constructor(color) {
        this.color = color
    }
    Start() {
        if (cjaCambios.src === 'http://127.0.0.1:5500/img/caja_de_cambios/automatico/n.png') {
            //cambiar la direccion al momento de hacer el deploy
            if (!car.contains('suspension')) {
                car.add('suspension');
                var audio = new Audio('./audio/encendido.mp3');
                audio.play();
            }
            else {
                alert('El auto ya esta encendido')
            }
        } else {
            alert('Debes de estar en neutro para encender el auto')
        }
    }
    ShutDown() {
        if (surface.contains('moveRight') && !surface.contains('paused')) {
            alert('Primero debes de parar el auto para poder apagarlo');
        } else {
            if (surface.contains('paused') || handBrake.contains('LightsAnimation')) {
                car.remove('suspension');
            } else {
                alert('Debes de poner el freno de mano para poder apagar el auto')
            }
        }
    }
    Stop() {
        surface.add('paused');
        cityWall.add('paused')
    }
    async Accelerate() {
        if (car.contains('suspension')) {
            if (handBrake.contains('LightsAnimation')) {
                alert('Primero debes de quitar el freno de mano para poder arrancar')
            } else {
                if (cjaCambios.src === 'http://127.0.0.1:5500/img/caja_de_cambios/automatico/n.png') {
                    alert('Para acelerar debes de llevar el auto al primer cambio')
                } else if (!cityWall.contains('cityWallpaperAnimation') || cityWall.contains('paused')) {
                    surface.remove('paused');
                    cityWall.remove('paused');
                    surface.add('moveRight');
                    cityWall.add('cityWallpaperAnimation');
                    if (checker != 1) {
                        checker = 1
                        this.Destiny();
                    }
                }
            }
        } else {
            alert('primero enciende el auto')
        }
    }
    Gearbox(cambio) {
        cambio = parseInt(cambio, 10)
        cjaCambios.src = gearBox[cambio - 1];
        if (cjaCambios.src === 'http://127.0.0.1:5500/img/caja_de_cambios/automatico/n.png' && surface.contains('moveRight')) {
            this.Stop();
            car.remove('suspension')
        }
    }
    TurnLight(direccion) {
        let dirRight = document.getElementById('turnRightLight');
        let dirLeft = document.getElementById('turnLeftLight');
        if (direccion == 'e') {
            dirRight.classList.toggle('LightsAnimation');
        } else {
            dirLeft.classList.toggle('LightsAnimation');
        }
    }
    HandBrake() {
        handBrake.toggle('LightsAnimation');
    }
    Destiny() {
        arrivals = ranNum(1, 3);
        distance = ranNum(1, 50);
        arrivalsTime = [ranNum(1, 5), ranNum(1, 5), ranNum(1, 5)];
        destiny.innerText = `el destino esta a ${distance} KM y se haran ${arrivals} paradas`;



        let arrival1 = 0; let arrival2 = 0; let arrival3 = 0;




        if (arrivals == 3) {
            console.log('arrivals 3');
            arrival1 = Math.floor(distance / ranNum(2, 5));
            arrival2 = Math.floor((distance - arrival1) / ranNum(2, 5));
            arrival3 = Math.floor(((distance - arrival1) - arrival2) / ranNum(2, 5));
        } else if (arrivals == 2) {
            arrival1 = Math.floor(distance / ranNum(2, 5));
            arrival2 = Math.floor((distance - arrival1) / ranNum(2, 5));
        } else {
            arrival1 = Math.floor(distance / ranNum(2, 5));
        }
        console.log(distance);
        console.log('parada 1 ' + arrival1);
        console.log('parada 2 ' + arrival2);
        console.log('parada 3 ' + arrival3);
        var Paused;
        let i = 0;


        var timer = setInterval(async () => {
            destiny.innerText = `el destino esta a ${distance} KM y se haran ${arrivals} paradas`;
            if (distance <= 0) {
                checker = 0;
                destiny.innerText = 'has llegado!'
                surface.add('paused');
                cityWall.add('paused');
                clearInterval(timer);
            }




            else if (arrival1 != 0 && arrival1 == distance || arrival2 != 0 && arrival2 == distance) {
                destiny.innerText = 'has llegado a una de tus paradas!'
                surface.add('paused');
                cityWall.add('paused');

                function segs() {
                    return new Promise(function (Resolve) {
                        setTimeout(function () { Resolve(false); }, arrivalsTime[i] * 1000);
                    });
                }
                Paused = await segs();

                surface.remove('paused');
                cityWall.remove('paused');

                console.log('repetidoooooo');
            }




            distance--;

        }, 1000);
    }
}