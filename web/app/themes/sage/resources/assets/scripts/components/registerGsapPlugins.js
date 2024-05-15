import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import InertiaPlugin from 'gsap/InertiaPlugin';
import Draggable from 'gsap/Draggable';
import SplitText from 'gsap/SplitText';

export default function registerGsapPlugins() {
    gsap.registerPlugin(ScrollTrigger, Draggable, InertiaPlugin, SplitText);
}
