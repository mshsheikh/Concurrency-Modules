"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Cooking() {
    console.log("Cooking started...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Fire On!");
        }, 1000);
    });
}
function Frying() {
    console.log("Chicken dipped in oil...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Chicken Fried!");
        }, 3000);
    });
}
async function CookingTime() {
    try {
        const result1 = await Cooking();
        console.log(result1);
        const result2 = await Frying();
        console.log(result2);
    }
    catch (error) {
        console.log("Cooking not complete!!", error);
    }
}
CookingTime();
