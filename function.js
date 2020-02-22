/*
function dosomething(){
  alert("hi")
}
dosomething();


var toDay = "saturday";
function dayDeclare(name){
  alert("today is " + toDay + name);
}
dayDeclare("mamun");

// function declaraton.

function dosomething(){
  alert("hi")
}
dosomething();


var toDay = "saturday";
function dayDeclare(name){
  alert("today is " + toDay);
}
dayDeclare();


function outputSomething(name, age, color,){
  document.write("your name is " + name + "your age is " + age + " body color " + color);
}
outputSomething("mamun ", 26, "white");

document.write("<p/>")

outputSomething("bolt ", 32, "black");


function result(firstNumber, secondNumber){
  return firstNumber + secondNumber;
}
var myresult = result(10, 10);
alert(myresult);


// local and global variable

function doAdition(a , b){
  var twonumber = a + b;
  alert(twonumber);
}
doAdition(9, 9);


//global variable
var output = " ";
function getAdition(a , b){
  var plus = a + b;
  output = "the value of adition " + plus;
  alert(output);
}
getAdition(20, 20);
alert(output + "thank you");


// Function example by text book.

function sum(){
  var a = 2;
  var b = 3;
  var b = a + b;
  document.write("the value of b = " + b);
}
sum();


document.write("<p/>")
function myFavouriteFurit(fruit){
  alert("my favourite fruit name is " + fruit);
}
myFavouriteFurit("mango" , "banana");



document.write("<p/>")
function writeName(name){
  document.write("my name is " + name);
}
writeName("ikter uddin muhammad bin bokter khilgi");




document.write("<p/>")
function familyName(totalname){
  document.write(totalname);
}
document.write("my name is ");
familyName("mamun <br/>");
document.write("my wife name is ");
familyName("shifa <br/>");
document.write("father name is ")
familyName("monir hossain")




document.write("<p/>");
function writename(punctution, fname){
  document.write(punctution + "<br/>")
}
document.write("my time scence is ");
writename("best <br/>");
document.write("i love my mother");




document.write("<p/>");
function addition(x , y){
  var total = x + y;
  return total;
}
var result = addition(12, 10);
alert("total value of addition = " + result);



document.write("<p/>");
function ourCompany(gaget, phone){
  document.write("we delivery only " + gaget + " not " + phone);
}
document.write("welcome to google world <br/>");
ourCompany("google pixel", "samsung <br/>");
document.write("well thanks for shopping by google");



document.write("<p/>");
function welcome(allname){
  document.write("welcome friend " + allname);
}
welcome("rokib <br/>");
welcome("shuvo <br/>");
welcome("zafor <br/>");
welcome("mahmud <br/>");

document.write("<p/>");
function mySum(firstnum , lastnum){
  var output = firstnum + lastnum;
  return output;
}
var simple_number = 0;
document.write("Before the function my number is = " + simple_number + "<br/>");
var final_number = mySum(5, 4);
document.write("after the function my number is " + final_number);


document.write("<p/>");
function addMultipal(one, two){
  return one + two;
}
alert("the result of multipal " + addMultipal(10, 10));
*/


//function declaration 05-11-2019.
function bismillaHirRahmanirRahim(){
  document.write("allah huyakber");
}
bismillaHirRahmanirRahim();


document.write("<p/>")
function doJikir(paraOne, paraTwo, paraThree, paraFour){
  document.write("jikir no one = " + paraOne + "<br/>" + " jikir no two = " + paraTwo + "<br/>" + " jikir no three = " + paraThree + "<br/>" + " jikir no four = " + paraFour + "<br/>");
}
doJikir("subahanAllah", "allhamdulla", "laillaha illalah", "allahhukyakbar");

document.write("<p/>")
function doSomething(name, age, height){
  document.write("name is declare " + name + " age is " + age + " height is " + height + "<br/>");
}
doSomething("mamun", 26, 5.4);
doSomething("zafor", 29, 5.7);
doSomething("sabus", 28, 5.2);


document.write("<p/>")
function getaddition(firstnum, secondnum){
  var getnum = firstnum + secondnum;
  document.write(getnum);
}
getaddition(10, 10);

document.write("<p/>")
function addition(numone, numtwo){
  return numone + numtwo;
}
var result = addition(97, 90);
document.write(result);


document.write("<p/>")
var get_multiple = " ";
function doMultiple(noone, notwo){
  var result = noone * notwo;
  get_multiple = ("the multiple result is " + result + "<br/>")
  document.write(get_multiple);
}
var output = doMultiple(5, 5);
document.write(get_multiple + "ok right output");


document.write("<p/>")
function doDivition(firstnum, secondnum){
  var getnumber = firstnum / secondnum;
  return getnumber;
}
var divided = doDivition(48, 8);
document.write("the result is = " + divided);



document.write("<p/>")
function sum(){
  var a = 2;
  var b = 3;
  var b = a + b;
  document.write("the value of b = " + b + "<br/>");
}
sum();

document.write("<p/>");
function writeMyfavouriteFurit(fruitname){
  document.write("my favourite fruitname = " + fruitname);
}
writeMyfavouriteFurit("mango and luccy");

document.write("<p/>");
function hobby(hobbyName){
  document.write("my favourite hobby is " + hobbyName + "<br/>");
}
hobby("programing");


document.write("<br/>");
function writename(){
  document.write("my name is mamun hossain" + "<br/>");
}
document.write("second is anonymous" + "<br/>");
writename();

document.write("<p/>");
function writeName(fname){
  document.write(fname + "patoyari. <br/>");
}
document.write("my name is ");
writeName("mamun hossain ");
document.write('my sister name is ');
writeName("fatema ");
document.write('my another sister name is ');
writeName("rehane ");
document.write('my another sister name is ');
writeName("mukta ");


document.write("<p/>");
function allName(name, pantuation){
  document.write("i am " + name + " and and my pantuation is " + pantuation + "<br/>");
}
allName("mamun", "good");
allName("rokib", "normal");
allName("shuvo", "nice");


document.write("<p/>");
function getAddition(numone, numtwo){
  
  var c = numone + numtwo;
  return c;
}
var value = getAddition(5, 8);
document.write("5 + 8 = " + value);


document.write("<p/>");
function addAddition(x, y){
  total = x + y;
  return total;
}
document.write("1 + 20 = " + addAddition(1, 20));


// example of global variable
document.write("<p/>");
var output = " ";
function multiply(first, second){
  output = "i thing the output is = ";
  result = first * second
  return result;
}
var showd = multiply(10, 10);
document.write(output + showd);


document.write("<p/>");
var welcome = "";
function doubleName(nameone, nametwo){
  welcome = "hello everyone this is " + nameone + " and he is " + nametwo ;
  wishing = "thankyou" + "<br/>";
  document.write(welcome + wishing); 
}
doubleName("mamun", "imad abrar ");
doubleName("mamun", "farhan islam ");
doubleName("mamun", "raihan islam ");


document.write("<br/>");
function mySum(numX, numY){
  total = numX + numY;
  return total;
}
var mynumber = 0;
document.write("befor the function, mynumber = " + mynumber + "<br/>");
var out = mySum(3, 4);
document.write("after function mynumber = " + out + "<br/>");