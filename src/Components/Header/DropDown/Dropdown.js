import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import styles from "./Dropdown.module.css";

const Dropdown = (props) => {
    const reducedMotion = useReducedMotion();

    return (
        <AnimatePresence>
            <motion.div
                className={styles.dropdown}
                initial="closed"
                animate={props.menuClicked ? "open" : "closed"}
                exit="exit"
                variants={{
                    closed: reducedMotion
                        ? { opacity: 0 }
                        : {
                              scale: 0,
                              transition: { delay: 1 },
                          },
                    open: reducedMotion
                        ? { opacity: 1 }
                        : {
                              scale: 1,
                              transition: {
                                  type: "spring",
                                  duration: 0.4,
                              },
                          },
                }}
            >
                <motion.label
                    className={styles.label}
                    htmlFor="symbols"
                    animate={props.menuClicked ? "open" : "closed"}
                    initial="closed"
                    transition={{ delay: 0.2 }}
                    variants={{
                        closed: { opacity: 0, x: -32 },
                        open: { opacity: 1, x: 0 },
                    }}
                >
                    include symbols
                    <input
                        onChange={props.onHandleSymbols}
                        className={styles.input}
                        type="checkbox"
                        id="symbols"
                        name="symbols"
                        defaultChecked
                    />
                    <span className={styles.checkmark}></span>
                </motion.label>
                <motion.label
                    className={styles.label}
                    htmlFor="numbers"
                    animate={props.menuClicked ? "open" : "closed"}
                    initial="closed"
                    transition={{ delay: 0.4 }}
                    variants={{
                        closed: { opacity: 0, x: -32 },
                        open: { opacity: 1, x: 0 },
                    }}
                >
                    include numbers
                    <input
                        onChange={props.onHandleNumbers}
                        className={styles.input}
                        type="checkbox"
                        id="numbers"
                        name="numbers"
                        defaultChecked
                    />
                    <span className={styles.checkmark}></span>
                </motion.label>
                <motion.label
                    className={styles.label}
                    htmlFor="letters"
                    animate={props.menuClicked ? "open" : "closed"}
                    initial="closed"
                    transition={{ delay: 0.6 }}
                    variants={{
                        closed: { opacity: 0, x: -32 },
                        open: { opacity: 1, x: 0 },
                    }}
                >
                    include letters
                    <input
                        className={styles.input}
                        type="checkbox"
                        id="letters"
                        name="letters"
                        defaultChecked
                        onChange={props.onHandleLetters}
                    />
                    <span className={styles.checkmark}></span>
                </motion.label>
            </motion.div>
        </AnimatePresence>
    );
};

export default Dropdown;
