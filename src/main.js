
// █▀▀ █░░ █░█ █ █▀▄   █░█░█ █▀▀ █▄▄ █▀▀ █░░ █▀█ █░█░█   ░░█ █▀
// █▀░ █▄▄ █▄█ █ █▄▀   ▀▄▀▄▀ ██▄ █▄█ █▀░ █▄▄ █▄█ ▀▄▀▄▀   █▄█ ▄█

// █▀ ▀█▀ ▄▀█ █▀█ ▀█▀ █▀▀ █▀█   ▀█▀ █▀▀ █▀▄▀█ █▀█ █░░ ▄▀█ ▀█▀ █▀▀
// ▄█ ░█░ █▀█ █▀▄ ░█░ ██▄ █▀▄   ░█░ ██▄ █░▀░█ █▀▀ █▄▄ █▀█ ░█░ ██▄

import "./styles/style.css";
import Lenis from "@studio-freight/lenis";
//import gsap from 'gsap'  // [import GSAP have to import in the function's js file]

import home from "./pages/home/home";
import homeScroll from "./pages/home/home-scroll";

// import ScrollTrigger from 'gsap/ScrollTrigger'   [import GSAP have to import in the function's js file]
// import home from './pages/home/home'  [imprort js file to main.js]

// don't forget to register plugins
//gsap.registerPlugin(ScrollTrigger, Flip);

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

const isHome = document.querySelector("body").classList.contains("body--home");
if (isHome) {
  home();
  homeScroll();
}
