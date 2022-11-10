import styles from "./LockImage.module.css";
import { motion } from "framer-motion";

const draw = {
    start: { pathLength: 0, opacity: 0 },
    end: (i) => {
        const delay = 1 + i * 0.5;
        return {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
                opacity: { delay, duration: 0.01 },
            },
        };
    },
};

const LockImage = (props) => {
    const openSpin = styles.cls + " " + (props.isGenerate ? styles.open : "");
    const openHindge =
        styles.cls +
        " " +
        styles.lockHindge +
        " " +
        (props.isGenerate ? styles.hindge : "");
    return (
        <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 288.5 400.6"
            initial="start"
            animate="end"
            className={openSpin}
        >
            <g id="handle" data-name="Layer 2">
                <motion.path
                    className={openHindge}
                    variants={draw}
                    custom={1.5}
                    d="M257.37,135.04c-1.03-.3-2.11-.45-3.21-.45H34.34c-1.1,0-2.18,.15-3.21,.45l-13.09,3.74,.35-13.61c.84-32.95,14.3-63.79,37.91-86.85C79.95,15.22,111.18,2.5,144.25,2.5s64.3,12.72,87.96,35.82c23.61,23.06,37.07,53.9,37.91,86.85l.34,13.61-13.09-3.74Z"
                />
                <motion.path
                    className={openHindge}
                    variants={draw}
                    custom={1.5}
                    d="M25.03,122.18c-1.73-.49-3.55-.76-5.44-.76H43.91c-1.89,0-3.72,.26-5.44,.76,1.45-57.18,48.25-103.09,105.78-103.09s104.33,45.91,105.78,103.09Z"
                />
            </g>
            <g id="body" data-name="Layer 1">
                <motion.path
                    className={styles.cls}
                    variants={draw}
                    custom={1}
                    d="M34.34,398.1c-17.56,0-31.84-14.28-31.84-31.84V146.43c0-14.19,9.52-26.78,23.16-30.63,2.79-.8,5.72-1.21,8.68-1.21H254.16c2.96,0,5.89,.41,8.71,1.21,13.61,3.84,23.13,16.44,23.13,30.62v219.83c0,17.56-14.28,31.84-31.84,31.84H34.34Z"
                />
            </g>
            <g id="KeyHole">
                <motion.path
                    className={styles.cls}
                    variants={draw}
                    custom={2}
                    d="M165.33,220.53c0,5.64-2.69,10.66-6.86,13.83v46.03h-21v-46.04c-4.16-3.17-6.85-8.18-6.85-13.82,0-9.58,7.77-17.35,17.35-17.35s17.36,7.77,17.36,17.35Z"
                />
            </g>
        </motion.svg>
    );
};

export default LockImage;
