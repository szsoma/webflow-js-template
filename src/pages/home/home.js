import gsap from 'gsap'   // [import GSAP have to import in the function's js file]
import ScrollTrigger from 'gsap/ScrollTrigger'  // [import GSAP have to import in the function's js file]
import inlineIcons from './home-txt-inline-icons';

function home()
{
    console.log(gsap);   // -- Check if it is okay
    gsap.registerPlugin(ScrollTrigger)
    console.log(ScrollTrigger)   // -- Check if it is okay

    inlineIcons();
}

export default home