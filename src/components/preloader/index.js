import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import styles from "./style.module.scss";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { opacity, slideUp } from "./anim.js";
const words = [
    "App design",
    "Website",
    "Landing page",
    "Dasbhoard",
    "Web development",
    "UX / UI",
    "Good talks",
    "AI development",
];
export default function Preloader() {
    const [index, setIndex] = useState(0);
    const [dimension, setDimension] = useState({ width: 0, height: 0 });
    useEffect(() => {
        setDimension({ width: window.innerWidth, height: window.innerHeight });
    }, []);
    useEffect(() => {
        if (index == words.length - 1)
            return;
        setTimeout(() => {
            setIndex(index + 1);
        }, index == 0 ? 1000 : 150);
    }, [index]);
    const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`;
    const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;
    const curve = {
        initial: {
            d: initialPath,
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
        },
        exit: {
            d: targetPath,
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
        },
    };
    return (_jsx(motion.div, { variants: slideUp, initial: "initial", exit: "exit", className: styles.introduction, children: dimension.width > 0 && (_jsxs(_Fragment, { children: [_jsxs(motion.p, { variants: opacity, initial: "initial", animate: "enter", children: [_jsx("span", {}), words[index]] }), _jsx("svg", { children: _jsx(motion.path, { variants: curve, initial: "initial", exit: "exit" }) })] })) }));
}
