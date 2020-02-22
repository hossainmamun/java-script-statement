// if else if else statement.


if(10 > 5){
    document.write("ten is greater then five");
}

document.write("<p/>");
var a = 7;
var b = 5;
if(a > b){
    document.write("yes i got the big number");
}

document.write("<p/>");

/*
var full_guaba = 123;
var half_guabe = 1234;
var eat = prompt("what you feed to do");
if(eat == "guaba"){
    var slice = prompt("how many slice you have taken");
    if(slice == full_guaba){
        alert("you are over taken");
    }
    else if(slice == null){
        alert("you are just telling lie");
    }
    else{
        alert("please confess the true value");
    }
}
else if(eat == null){
    alert("thank you for cancled");
}
else{
    alert("false fruit name");
}
*/

var a = 20;
var b = 15;
if(a > 20){
    document.write("what the fuck");
}
document.write("this is true value");

document.write("<p/>");
var a = 50;
var b = 49;
if(a >= b && b <= a){
    document.write("comparism value is true" + "<br/>")
}
document.write("break");

document.write("<p/>");
var a = 10;
var b = 10;
if(a == b){
    document.write("value are equal");
}


document.write("<p/>");
var variable = 5;
var variable_one = 6;
if(variable == 5){
    document.write("value is five" + "<br/>");
    if(variable_one == 6){
        document.write("value is six");
    }
}

document.write("<p/>");
button = "pressed";
if(button == "pressed" || button != "pressed"){
    document.write("press the button");
}

document.write("<p/>");
var a = 10;
var b = 5;
if(a > b && a != b){
    document.write("logical operator is worked" + "<br/>");
}
document.write("null value");


document.write("<p/>");
var x1 = 40;
var y1 = 42;
if(x1 <= y1 && y1 == x1){
    document.write("logical is with work respectly");
}
document.write("logical is not work lol");

document.write("<p/>");
var x = 150;
var y = 120;
var z = 140;
if(x > y){
    if(x >= z && y <= z && x != y)
    document.write("x is greater then all" + "<br/>");
    if(x != z || x == y)
    document.write("value is return cause its logical or operator");
}


document.write("<p/>");
var a = 6;
if(a > 5){
    document.write("a is greater then applied condition");
}

document.write("<p/>");
var number = 5;
if(number <= 10){
    document.write("value is true");
}


document.write("<p/>");
var x = 10;
if(x >= 9){
    document.write("10 is greater then 9");
}

// if else statement;

document.write("<p/>");
var a = 10;
if(a < 15 && a== 12){
    document.write("a is less then 15");
}
else{
    document.write("condition is not true");

}


document.write("<p/>");
var a = 15;
var b = 10;
if(a > b){
    document.write("my name is mamun");
}
else{
    document.write("this is not me");
}

document.write("<p/>");
if(5 == 5){
    document.write("the value is true");
}
else{
    document.write("not true");
}


document.write("<p/>");
// Give what day of the week it is. Returns Sunday through Saturday.
var day = new Date();
var myday = day.getDay();
if(myday == "Saterday"){
    document.write("it's party day");
}
else{
    document.write("omg ! i dont like this day");
}



document.write("<p/>");
var number = 5;
var letter = "T";
if((number == 5) && (letter == "t")){
    document.write("both the number and letter is matched");
}else{
    document.write("something is missing");
}



document.write("<p/>");
age = 20;
if(age >= 18){
    document.write("you are allowed to drink alchohol");
}else{
    document.write("you are not allowed to drink alchohol");
}


document.write("<p/>");
var age = 21;
if(age >= 21)
    document.write("you are allowed to drink votka");
else
    document.write("you are not allowed to drink votka");



document.write("<p/>");
var day = new Date();
var today_day = day.getDate();
if(today_day == "wednes"){
    document.write("have a nice day");
}
else{
    document.write("just revoltin");
}

document.write("<p/>");
var day = new Date();
var today_date = day.getDay();
if(day == 30){
    document.write("i am lucky today");
}else{
    document.write("have a nice day");
}


document.write("<p/>");
var today_weather = "raining";
if(today_weather == "raining"){
    document.write("i am not going today");
}else{
    document.write("i will go and play football like cristiono ronaldo");
}


// if... else if... else statement
document.write("<p/>");
var date = new Date();
var time = date.getHours();
if(time < 10){
    document.write("good morning");
}
else if(time < 24){
    document.write("good afternoon");
}
else{
    document.write("good evening");
}


document.write("<p/>");
var a = 1333;
var b = 144;
var c = 142;
if(a > b && a > c){
    document.write("a is greter then all value");
}
else if(b > c && b > a){
    document.write("b is gratest")
}
else{
    document.write("c is greatest");
}


// grading system 
/*
var result = prompt("what do you want to do");
if(result == "r"){
    var marks = prompt("what is marks");
    if(marks >= 80 && marks <= 100){
        alert("you got A+");
    }
    else if(marks >=70 && marks <=79){
        alert("you got A");
    }
    else if(marks >=60 && marks <= 69){
        alert("you got A-");
    }
    else if(marks >= 55 && marks <= 59){
        alert("you got B+")
    }
    else if(marks >= 50 && marks <= 54){
        alert("you got B");
    }
    else if(marks >= 45 && marks <= 49){
        alert("you got C+");
    }
    else if(marks >= 40 && marks <= 44){
        alert("you got C");
    }
    else if(marks >= 33 && marks <= 39){
        alert("you got D")
    }
    else if(marks >= 1 && marks <= 32){
        alert("you have been failed")
    }
    else if(marks == null){
        alert("yor are cancled");
    }
    else{
    alert("error marks");
    }
}   
else if(result == null){
    alert("cancled");
}
else{
    alert("wrong keyword");
}
*/