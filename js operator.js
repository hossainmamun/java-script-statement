// types of operator
/*
1.mathmathical operator.(+ - * / %)
2.comparision operator.(==, ===, <, >, <=, >=, !=, !==)
3.logical operator.(&&, ||)
4.assignment operator.(=,+=, -=, *=, /=, %=)
5.increement operator & decerement operator.(++, --)
6.bitwise operator.(use it suddenly);
*/

document.write("<h4>mathmathical operator use</h4>" + "<br/>");

var x = 12;
var y = 22;
var c = x + y;
document.write("the value of c =" + c + "<br/>");

document.write("<p/>");
var mamun = "programer ";
var alif = "developer ";
var both = mamun + alif;
document.write("result is =" + both);

document.write("<p/>");
var number_one = 100;
var number_two = 54;
var subtruct = number_one - number_two;
document.write("total value = " + subtruct);

document.write("<p/>");
a = 12 + 45;
document.write("the value of a " + a);

document.write("<p/>");
var what = 100 + 100;
var value = 100 + 100;
var third = 100 + 100;
document.write("the all value " + (what + value + third + 100));


document.write("<p/>");
var a = 12
var b = 12;
document.write("the multipal value " + (a * b));

document.write("<p/>");
var a = 5 * 4;
var b = a * 5;
document.write("the multipla value of b = " + b);

document.write("<p/>");
var divOne = 100;
var divTwo = 5;
document.write("the divition value id = " + divOne / divTwo);

document.write("<p/>");
var number_one = 100 / 4;
var number_two = 100 / 5;
var result_num = (number_one / number_two) / 2;
document.write("the three var value " + result_num);

document.write("<p/>");
var a = 110;
var b = 2;
var c = (a / b) % 10;
document.write("modular value " + c);


document.write("<p/>");
a = 405;
b = 405 % 13;
document.write("modulas value = " + b);


document.write("<h4>the increment & decrement operator</h4>");
document.write("<p/>");
var a = 1;
a++;
document.write("the increment. =" + a);

document.write("<p/>");
var value = 5;
value--;
document.write("the decrement = " + value);


document.write("<p/>");
var x = 100;
var y = 60;
x = x + 3;
y = y + 2;
document.write("the sum of x and y = " + (x + y) + "<br/>");
document.write("the divition of x and y = " + (x - y) + "<br/>");
document.write("the multipal of x and y = " + (x * y) + "<br/>");
document.write("the divition of x and y =" + (x / y) + "<br/>");


document.write("<p/>");
value = 1;
document.write(value++);
document.write("<br/>");
document.write(value);


document.write("<p/>");
counter = 15;
counter++;
counter++;
counter++;
document.write("counter = " + counter);


document.write("<h4>assignment operator</h4>");
document.write("<p/>");
/* += plus equal */
a = 3;
a += 4;
document.write("the plus equal " + a);

document.write("<p/>");
a = 10;
a -= 8;
document.write("the different minas equal = " + a);

document.write("<p/>");
a = 15;
a /= 3;
document.write("the divition of diviton equal " + a);

document.write("<p/>");
a = 5;
a *= 5;
document.write("the multipal equal of multipal equal " + a);

document.write("<p/>");
a = 45;
a %= 2;
document.write("the modulus equal of of modulus value " + a);


document.write("<h4>comparisiom operator</h4>");
/*comparison operator */
document.write("<p/>");
x = 300;
y = 300;
document.write("the value is = " + (x == y));


document.write("<p/>");
x = 30;
y = 20;
c = (x === y);
document.write("the value c =" + c);


document.write("<p/>");
var u = "100";
var i = "80";
document.write("the string value is = " + (u === i));

document.write("<p/>");
var a = 100;
var b = 95;
var c = a != b;
document.write("the C value is = " + c);

document.write("<p/>");
var x = 44;
var y = 44;
document.write("the not equal operator is =" + (x != y));

document.write("<p/>");
var x = 140;
var y = 62;
document.write("the x & y value is = " + (x > y));

document.write("<p/>");
var x = "mamun";
var y = "100";
var string = x !== y;
document.write("the string value is = " + string);

document.write("<p/>");
var x = "200 mamun";
var y = "300 mamun";
document.write("the x and y is = " + (x < y));

document.write("<p/>");
var x = 121;
var y = 120;
var r = (x <= y);
document.write("the r value is = " + r);

/*
document.write("<p/>");
document.write("<h3>javascript string lefght</h3>");
var x = "hello jutubd";
document.write(x.length);
*/

