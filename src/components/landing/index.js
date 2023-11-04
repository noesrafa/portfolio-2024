import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import Styles from "./style.module.scss";
const Landing = () => {
    const titleTop = useRef(null);
    const titleBottom = useRef(null);
    useEffect(() => {
        let title1 = new SplitType(titleTop.current);
        let chars1 = title1.chars;
        const animation = (delay) => {
            return {
                yPercent: 180,
                stagger: 0.01,
                ease: "expo",
                duration: 0.3,
                delay: delay,
            };
        };
        gsap.from(chars1, animation(2.6));
        let title2 = new SplitType(titleBottom.current);
        let chars2 = title2.chars;
        gsap.from(chars2, animation(2.7));
    }, []);
    return (_jsxs("section", { className: Styles.container, children: [_jsxs("header", { children: [_jsx("h2", { ref: titleTop, children: "Hi, I am Rafael. " }), _jsxs("h2", { ref: titleBottom, children: ["Designer ", _jsx("span", { children: "<>" }), " Developer"] })] }), _jsx("p", { children: "A versatile professional who has transitioned from 3D artist to UX designer. With a strong background in prototyping and testing digital products." })] }));
};
export default Landing;
