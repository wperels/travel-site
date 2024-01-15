/* 
This is a traditional blueprint in 
JavaScript to create an object.

function Person(fullName, favColor) {
    this.name = fullName;
    this.favoriteColor = favColor;
    this.greet = function() {
      console.log("Oh, hello! " + this.name + " color " + this.favoriteColor + ".");
  }
} */

// This is CLASS syntax.
    class Person {
        constructor(name, favoriteColor) {
            this.name = name;
            this.favoriteColor = favoriteColor;
        }
        greet() {
            console.log("Oh, hello! " + this.name + " color " + this.favoriteColor + ".");
        }
    }

    // use this when importing into APP.js
export default Person