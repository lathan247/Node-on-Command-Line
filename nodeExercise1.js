"use strict"


setInterval(function() { 
    alert("I'm so sleepy"); }, 300);


    var i = 0;

   function getUp() {
        while(i < 10) {
            console.log(i);
            ++i;
        }
        alert("Get more sleep then.");
    };

    getUp();