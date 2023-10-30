// for image info. see "C:\Users\wpere\OneDrive\Course Work\sites\responsive-images\Mastering the Modern Workflow example"
// in terminal **npm run dev**

import { extend } from 'lodash';
import '../styles/styles.css'
import Person from './modules/PersonClassExample'

if (module.hot) {
    module.hot.accept()
}


/* Lesson example code below this line */

/* this is a example of class inheritance
    Adult class inherited the properties and methods of Person*/
class Adult extends Person { 
    payTaxes() {
    console.log(this.name + " now owes zero taxes.");
    }
} 

let john = new Person("John Doe", "purple");
john.greet();

let jane = new Adult("Jane Smith", "green");
jane.greet();
jane.payTaxes();
// results: Jane Smith now owes zero taxes.

