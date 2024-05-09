// █▀▀ █░░ █░█ █ █▀▄   █░█░█ █▀▀ █▄▄ █▀▀ █░░ █▀█ █░█░█   ░░█ █▀
// █▀░ █▄▄ █▄█ █ █▄▀   ▀▄▀▄▀ ██▄ █▄█ █▀░ █▄▄ █▄█ ▀▄▀▄▀   █▄█ ▄█

// █▀ ▀█▀ ▄▀█ █▀█ ▀█▀ █▀▀ █▀█   ▀█▀ █▀▀ █▀▄▀█ █▀█ █░░ ▄▀█ ▀█▀ █▀▀
// ▄█ ░█░ █▀█ █▀▄ ░█░ ██▄ █▀▄   ░█░ ██▄ █░▀░█ █▀▀ █▄▄ █▀█ ░█░ ██▄

import "./styles/style.css";
// import Lenis from "@studio-freight/lenis"; // TODO Add lenis smooth scrolling 
// import gsap from 'gsap'  // TODO [import GSAP have to import in the function's js file]

import home from "./pages/home/home";
import homeScroll from "./pages/home/home-scroll";

// import ScrollTrigger from 'gsap/ScrollTrigger'  // TODO [import GSAP have to import in the function's js file]
import home from './pages/home/home'  // [imprort js file to main.js]

// TODO don't forget to register plugins if you want to use GSAP
//gsap.registerPlugin(ScrollTrigger, Flip);

// GLOBAL SCRIPTS

// Lenis SmoothScroll
// function scroll()
// {
//     const lenis = new Lenis()

//         function raf(time) {
//             lenis.raf(time)
//             requestAnimationFrame(raf)
//         }

//     requestAnimationFrame(raf)
// }
// scroll();


// PAGE RELATED SCRIPTS
const isHome = document.querySelector("body").classList.contains("body--home");
if (isHome) {
  home();
  homeScroll();
}
