"use strict"


var Car1=0;
for (Car1=0; Car1 <50; Car1++)
{
    console.log(Car1);
}
while(Car1 <50){
    Car1++, console.log(Car1++);
}
for (var Car2 = 0; Car2 <101; Car2++)
{
console.log(Car2);
}
while(Car1<100) {Car1++; if (Car1 % 3 === 0){console.log("fizz")};}
while(Car1<100) {Car1++;if (Car1 % 5 === 0){console.log("buzz")};}
while(Car1<100) {
    if (Car1 % 5 === 0 && Car1 % 3 === 0)
    {console.log(Car1,"fizzbuzz")};
}