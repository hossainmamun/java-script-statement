let x = 1;
while (x <= 10) {
    document.write("the value of x: " + x + "<br/>");
    x++;
}

document.write("<p/>");
let value = 5;
while (value < 100) {
    document.write("<b>the value is:</b> " + value + "<br/>");
    value = value + 5;
}


document.write("<p/>");
let no = 4;
while (no <= 50) {
    document.write("eritate no: " + no + "<br/>");
    no += 4;
}


document.write("<p/>");
let a = 20;
while (a > 1) {
    document.write("result is: " + a + "<br/>");
    a--;
}

document.write("<p/>");
let b = 12;
while (b >= 2) {
    document.write("result is: " + b + "<br/>");
    b = b - 2;
}

document.write("<p/>");
let total = 1;
while (total <= 10) {
    document.write(total + '_' + (total * 10) + "<br/>");
    total++;
}


document.write("<br/>");
let brush_price = 5;
let counter = 10;
document.write("<table border = 1 align = center>");
document.write("<tr><th>quantity</th>");
document.write("<th>price</th></tr>");
while (counter <= 100) {
    document.write("<tr><td>");
    document.write(counter);
    document.write("</td><td>");
    document.write(brush_price * counter);
    document.write("</td></tr>");
    counter = counter + 10;
}
document.write("</table>");


document.write("<p/>");
let num = 1;
while (num <= 10) {
    if (num < 5) {
        document.write(num + " is less then 5" + "<br/>");
    } else {
        document.write(num + " is not less then 5" + "<br/>");
    }
    num++;
}


document.write("<p/>");
let c = 1;
let myName = "mamun";
while (c <= 5) {
    if (myName == "sakib") {
        document.write("lol is it fun");
    } else {
        document.write("lol is the best <br/>");
    }
    c++;
    if (c == 3) {
        break;
    }
    document.write(c + "<br/>");
}
document.write("fuck you all developer");

document.write("<p/>");
let i = 0;
while (i <= 8) {
    i = (i++) + 2;
    document.write(i + "<br/>")
}

document.write("<p/>");
let number = "1";
while (number <= "15") {
    document.write("Run Number " + number + "<br/>");
    ++number;
}


document.write("<p/>");
let q = 1;
while (q <= 5) {
    q++;
    document.write((2 * q - 1) + "<br/>");
}


document.write("<p/>");
for (let t = 1; t <= 10; t++) {
    if (t == 5) {
        break;
    }
    document.write(t + "<br/>");
}



// do while loop..............
document.write("<p/>");
let mamun = 50;
do{
    document.write("the result is = " + mamun + "<br/>");
}while(mamun < 10);



document.write("<p/>");
value = 50;
do{
    document.write("result = " + value + '<br/>');
    value = value - 5;
}while(value >= 5);




document.write("<p/>");
a = "mamun";
do{
    document.write("my name is " + a + "<br/>");
}while(a != "mamun");


document.write("<p/>");
i = 1;
do{
    i = i + 3;
    document.write("the number is = " + i + '<br/>');
}while(i < 15);



document.write("<p/>");
i = 0;
document.write("the code will be run 0" + "<br/>");
do{
    ++i;
    document.write("the code is lol = " + i + "<br/>");
}while(i < 10);



document.write("<p/>");
age = 26;
while(age <= 80){
    if(age <= 56){
        document.write("when age = " + age + "you are on the way of adult <br/>");
    }else if(age > 56){
        document.write("when age = " + age + "you date are expired now <br/>");
    }
    age = age + 3;
}


document.write("<p/>");
a = 2;
b = 1;
do{
    document.write("a * b = " + a * b + "<br/>");
    b++;
}while(b < 10);


document.write("<p/>");
a = 3;
b = 2;
do{
    document.write("a * b = " + a * b + "<br/>");
    a++;
}while(a <= 8);


/*
// function declaration
document.write("<p/>");
myName = "mamun";
function getResult(){
    document.write("i am successfully return function value " + myName + "<br/>");
}
getResult();

document.write("<p/>");
function doAddition(numberOne, numberTwo){
    let a = numberOne + numberTwo;
    return(a);
}
let result = doAddition(10, 10);
document.write(result);


document.write("<p/>");
function outputSomething(name, hobby, terget){
    document.write("my name is " + name + " my hobby is " + hobby + " my terget is " + terget + "<br/>");
}
outputSomething("mamun", "programing", "webdeveloper");
outputSomething("hossain", "programing", "gamedeveloping");
outputSomething("abul", "programing", "softwerdeveloping");
*/