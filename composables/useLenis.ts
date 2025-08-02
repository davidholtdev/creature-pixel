// composables/useLenis.ts
import Lenis from "@studio-freight/lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

let lenis: Lenis | null = null;
let initialized = false;

export const useLenis = () => {
  if (!lenis && import.meta.client) {
    lenis = new Lenis({
      duration: 0.9,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
  }

  if (lenis && !initialized) {
    initialized = true;

    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        return arguments.length ? lenis!.scrollTo(value!, { duration: 0, immediate: true }) : lenis!.scroll;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: document.body.style.transform ? "transform" : "fixed",
    });

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis!.raf(time * 1000));

    ScrollTrigger.refresh();
  }

  return lenis;
};
