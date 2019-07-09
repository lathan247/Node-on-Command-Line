"use strict"

var { goDawgs } = require("./godawgs");
var { dawgsOffense } = require("./sicEm");
var { dawgsDefense } = require("./dawgsDefense");

var dawgs = "Go Dawgs!";

console.log("Go Dawgs baby!");


if( dawgs === "Go Dawgs!") {
    console.log(goDawgs());
} else if(dawgs === "Hunker Down!") {
    console.log(dawgsOffense());
} else if(dawgs === "Sic Em!") {
    console.log(dawgsDefense());
}
