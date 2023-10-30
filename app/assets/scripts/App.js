// for image info. see "C:\Users\wpere\OneDrive\Course Work\sites\responsive-images\Mastering the Modern Workflow example"
// in terminal **npm run dev**

import '../styles/styles.css'
import MobileMenu from './modules/MobileMenu'

let mobileMenue = new MobileMenu();



if (module.hot) {
    module.hot.accept()
}

