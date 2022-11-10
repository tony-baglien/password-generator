import styles from "./PasswordContainer.module.css";
import { motion } from "framer-motion";

const PasswordContainer = (props) => {
    const variants = {
        shakeBottom: { translateY: 0, opacity: 0 },
        shakeTop: {
            translateY: [0, -8, 0],
            opacity: [0, 1],
        },
        rotateStart: { rotate: 20 },
        rotateEnd: { rotate: 0 },
    };

    function copyToClipboard(e) {
        let passToString = props.password.join("");
        console.log(passToString);

        if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
            return navigator.clipboard.writeText(passToString);
        }
        return Promise.reject("The clipboard api is not available");
    }

    return (
        <motion.div
            className={
                styles.container + " " + (props.isGenerate ? styles.shake : "")
            }
            initial={{
                opacity: 0,
                transition: {
                    duration: 2,
                    type: "tween",
                },
            }}
            animate={{ opacity: 1 }}
            onClick={copyToClipboard}
            whileTap={{
                scale: 0.9,
                transition: {
                    duration: 0.3,
                    type: "spring",
                },
            }}
        >
            {props.password.map((star, index) => {
                return (
                    <motion.span
                        key={index}
                        className={styles.star}
                        initial="shakeBottom"
                        animate="shakeTop"
                        variants={variants}
                        transition={{
                            type: "spring",
                            duration: 0.6,
                            delay: 3 + index * 0.1,
                        }}
                    >
                        {star}
                    </motion.span>
                );
            })}
        </motion.div>
    );
};

export default PasswordContainer;
