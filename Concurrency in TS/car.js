"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Car's Door Open!");
function sitInside() {
    console.log("Sit inside the car...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Engine Started!");
        }, 6000);
    });
}
function driveCar() {
    console.log("Set 1st gear...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Pressing the accelerator!");
        }, 6000);
    });
}
function onRoad() {
    console.log("Shifting 2nd gear...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Car speed is now 30km/hr!");
        }, 4000);
    });
}
function speedBreaker() {
    console.log("Speed Breaker! Shiffting gear down to 1st...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Crossing Speed Breaker, speed is now 12km/hr.");
        }, 6000);
    });
}
async function drivingProcess() {
    try {
        const result1 = await sitInside();
        console.log(result1);
        const result2 = await driveCar();
        console.log(result2);
        const result3 = await onRoad();
        console.log(result3);
        const result4 = await speedBreaker();
        console.log(result4);
    }
    catch (error) {
        console.log("Car has been stopped!", error);
    }
}
drivingProcess();
