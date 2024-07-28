"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Welcome to Windows 11");
console.log("Installation started...");
function setupScreen1() {
    console.log("Formating Local Disk (C:)");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Formating Complete!");
        }, 8000);
    });
}
function setupScreen2() {
    console.log("Creating system files, please wait...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Installing Windows...");
        }, 14000);
    });
}
function setupScreen3() {
    console.log("Installation has been completed!");
    return new Promise((reolve, reject) => {
        setTimeout(() => {
            reolve("Restarting your PC...");
        }, 8000);
    });
}
async function Windows11() {
    try {
        const result1 = await setupScreen1();
        console.log(result1);
        const result2 = await setupScreen2();
        console.log(result2);
        const result3 = await setupScreen3();
        console.log(result3);
    }
    catch (error) {
        console.log("ERROR: Something went wrrong", error);
    }
}
Windows11();
