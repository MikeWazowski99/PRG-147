// Global Variables
//  global variables are declared with var
//  local variables are declared wih let
//  
var name1 = "Meri";

const taxRate = .07; // This is a constant
// myName = "Meredith Louise Engel" - Allowed but frowned upon

function names() {

    //fix the errors
    var firstName = "Meredith",
        lastName = "Engel";
    document.getElementById("name").innerHTML = name1;
    document.getElementById("full-name").innerHTML = firstName + " " + lastName;
    var firstName = "Doctor";
    var name = "Beba";
    document.getElementById("first").innerHTML = name;
    document.getElementById("nick-name").innerHTML = firstName;

}

function scope() {
    //fix the errors
    var firstName = "Meredith"
    var taxRate = .06
    document.getElementById("global").innerHTML = name1;
    document.getElementById("local").innerHtml = firstName;
    document.getElementById("tax").innerHTML = taxRate;
    var taxRate = .08
    document.getElementById("new-tax").innerHTML = taxRate;
}

function letMe() {
    // Fix the errors
    let dog1 = "Ollie";
    dog2 = "Nessie";
    var dog3 = "Paisley";
    var dog2;
    document.getElementById("dog1").innerHTML = dog1;
    document.getElementById("dog2").innerHTML = dog2;
    document.getElementById("dog3").innerHTML = dog3;
    var dog2 = "Onion"
    document.getElementById("dog1-2").innerHTML = dog2;
}

function constants() {
    // fix the errors
    const PI = 3.14;
    const dogs = ["Ollie", "Nessie", "Ory"];
    document.getElementById("doggos").innerHTML = dogs;
    dogs[0] = "Ollie Bear";
    document.getElementById("new-doggos").innerHTML = dogs;
    const breed = ["Shepherd", "Collie", "Bouvier"];
    document.getElementById("pi").innerHTML = PI;
    document.getElementById("breeds").innerHTML = breed;
}

function myMath() {
    // create statements demonstrating the use of each operator
    let addition = 10 + 32
    document.getElementById("addition").innerHTML = "10 + 32 = " + addition;
    let subtraction = 20 - 40
    document.getElementById("subtraction").innerHTML = "20 - 40 = " + subtraction;
    let multiplication = 9 * 7
    document.getElementById("multiplication").innerHTML = "9 * 7 = " + multiplication;
    let exponent = 9 ** 2
    document.getElementById("exponent").innerHTML = "9^2 = " + exponent;
    let division = 90 / 10 
    document.getElementById("division").innerHTML = "90 / 10 = " + division;
    let modulus = 100 % 10 
    document.getElementById("modulus").innerHTML = "100 % 10 = " + modulus;
    var x = 100
    let increment = ++x;
    document.getElementById("increment").innerHTML = "100++ = " + increment;
    let decrement = --x;
    document.getElementById("decrement").innerHTML = "100-- = " + decrement;
}

function assignments() {
    // create statements demonstrating the use of each assignment type
    var x = 10
    document.getElementById("equals").innerHTML = "x = 10" + " x = " + x;
    x += 10
    document.getElementById("plus-equals").innerHTML = "x += 10" + " x = " + x;
    x -= 15
    document.getElementById("minus-equals").innerHTML = "x -= 10" + " x = " + x;
    x *= 2
    document.getElementById("times-equals").innerHTML = "x *= 2" + " x = " + x;
    x /= 2
    document.getElementById("divide-equals").innerHTML = "x /= 2" + " x = " + x;
    x %= 5
    document.getElementById("modulus-equals").innerHTML = "x %= 5" + " x = " + x;
}

function dataTypes() {
    // create samples of each of the data types from the
    // index page and display them in the Data Types section
    const cats = ["Lazuli", " Max", " Tabby"];
    document.getElementById("array").innerHTML = cats;
    const computer = {quality:"good", color:"black"};
    computer.quality = "brand new";
    computer.color = "red";
    document.getElementById("object").innerHTML = "The computer is " + computer.quality + " and the color is " + computer.color


}
