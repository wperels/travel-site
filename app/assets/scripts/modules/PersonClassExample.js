// use C:\Users\wpere\OneDrive\Course Work\sites\travel-site\app\assets\scripts\AppClassExample.js
// to work with this practice JS class files.

/* this is the traditional, constructor function
   to create an object, class, blueprint   */

function Person(fullName, favColor) {
    this.name = fullName;
    this.favoriteColor = favColor;
  this.greet = function() {
    console.log("Hello there my name is " + this.name + " & fave color is " + this.favoriteColor + ".")
  }
}

// this is the same as above but in Class syntax 
// JS will know to create an object if "constructor" is used in a class.

class Person {
    constructor(name, favoriteColor) {
        this.name = name;
        this.favoriteColor = favoriteColor;
    }

    greet() {
        console.log("Hello there my name is " + this.name + " & fave color is " + this.favoriteColor + ".")
    }
}
export default Person