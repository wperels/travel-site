// for image info. see "C:\Users\wpere\OneDrive\Course Work\sites\responsive-images\Mastering the Modern Workflow example"
// in terminal **npm run dev**

import '../styles/styles.css'
 // use this when importing from Person.js
import Person from './modules/Person'
// import MobileMenu from './modules/MobileMenu'
//import RevealOnScroll from './modules/RevealOnScroll'

//let mobileMenue = new MobileMenu();

//let revealOnScroll = new RevealOnScroll(); */



/* if (module.hot) {
    module.hot.accept()
} */

//Lession below this line*/

class Adult extends Person {
    payTaxes() {
        console.log("Oh, hello! " + this.name + " now owes zero taxes. ");
    }
}

var john = new Person("John Doe", "purple");
john.greet();

var jane = new Adult("Jane Smith", "green");
jane.greet();
jane.payTaxes();