// array;

/*
var number = [10, 12, 32, 21];
document.write(number);

document.write("<p/>");
call = ["mamun", "farhan", "raihan", "badhon"];
document.write(call[2]);

document.write("<p/>");
name_number = ["mamun ", 100, "raga"];
document.write(name_number[2]);

document.write("<p/>");
result = ["javascript", "java", "php", "html", "css", "python", "ruby", "c++"];
//result.shift();
add_two = call .concat(result) .concat(number);
//document.write(result); 
document.write(add_two);
*/

document.write("<h3>array mathords</h3>");

//sort methods;
iss = ["mamun", "mitu", "fatama", "runa", "mithi", "koli"];
iss.sort();
document.write(iss);

//push mehtod;
document.write("<p/>");
all_name = ["google", "facebook", "youtube", "twiter", "dropbox", "linkedin"];
all_name.push("instragram", "viver");
document.write(all_name);

//pop mehtod;
document.write("<p/>");
var number = [10, 45, 21, 8, 48, 33, 77, 81, 36];
number.pop();
document.write(number);
//document.write(number.length);

//shift method;
document.write("<p/>");
var value = [10, 20, 30, 40, 50, 60, 70];
value.shift();
document.write(value);

//toString method;
document.write("<p/>");
var mobile = ["iphone", "sumsung", "xiaomi", "huawai", "vivo", "oppo"];
mobile.toString();
document.write(mobile);

//usshift method;
document.write("<p/>");
var operatingSystem = ["windows", "mac", "linux", "ubuntu"];
operatingSystem.unshift("android", "ios");
document.write(operatingSystem);


//concat methods;
document.write("<p/>");
var car = ["marcedes", "BMW", "lamborgini", "range-rober ="];
var motorcycle = ["pusler", "r15", "CBR", "apache"];
var vahical = car .concat(motorcycle);
document.write(vahical);

//array.length;
document.write("<p/>");
var count = [2, 2, 5, 6, 8, 7, 9];
document.write(count.length);

document.write("<p/>");
var web_design = ["html", "css", "bootstrap", "javascript", "react"];
document.write(web_design[2]);



//book excercise.............
document.write("<p/>");
document.write("<h3>book excercise</h3>");
humanName = new Array();
humanName[0] = "Mike ";
humanName[1] = "Scott ";
humanName[2] = "Peter ";
document.write(humanName[0], humanName[1], humanName[2]);

document.write("<p/>");
var employee_names = ["habib", "limon", "ali"];
document.write("the first employer name is =" + employee_names[0] + "<br/>");
document.write("the second employee name is = " + employee_names[1] + "<br/>");
document.write("the second employee names is = " + employee_names[2] + "<br/>");

document.write("<p/>");
var students = ["kobir", "lina", "jannat", "tofa"];
document.write("all students names " + students);

document.write("<p/>");
var song = ["habib", "ridoy", "tahosan"];
for(i = 0; i < 3; i++){
    document.write(song[i] + "<br/>")
}

document.write("<p/>");
document.write("looping through array ");
var x = [0, 1, 4, 9, 16, 25, 36, 49, 64, 81];
for(j = 0; j < 10; j++){
    document.write("j = " + x[j]);
}

document.write("<p/>");
cars = ["saab", "BMW", "volvo", "Toyota"];
document.write(cars[0] + " and " + cars[2] + " are Swedish cars");
//document.write(cars[0], cars[3]);

document.write("<p/>");
var elements = ["car", "house", "father", "mother"];
document.write("i want to buy a " + elements[0] + " for my " + elements[3]);


document.write("<p/>");
var add_something = ["book", "pen", "pencil", "marker"];
add_something.unshift("ereser", "signpen");
document.write(add_something);
