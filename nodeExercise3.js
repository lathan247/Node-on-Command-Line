"use strict"

var readline = require("readline");

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var firstQuestion = new Promise(function (resolve, reject) {
    rl.question("Mom what are we having for dinner?", function(answer) {
        resolve(answer);
    });
});

var secondQuestion = function() {
    return new Promise(function(resolve, reject) {
        rl.question("How much longer until it is ready?", function(answer) {
            resolve(answer);
            rl.close();
       });
    })
}

firstQuestion
    .then(function(result) {
        console.log(result + ", wow that sounds so yummy!");
    })

    .then(secondQuestion)
    .then(function(result) {
        console.log("dang that sounds " + result + " too long!");
    })
    
    