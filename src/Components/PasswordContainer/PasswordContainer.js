import styles from "./PasswordContainer.module.css";
import { motion } from "framer-motion";

const PasswordContainer = () => {
    const stars = ["*", "*", "*", "*", "*", "*", "*"];

    return (
        <div className={styles.container}>
            {stars.map((star, index) => {
                return (
                    <motion.span
                        key={index}
                        className={styles.star}
                        initial={{ translateY: 0, opacity: 0 }}
                        animate={{
                            translateY: [0, -8, 0],
                            opacity: [0, 1],
                        }}
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
        </div>
    );
};

export default PasswordContainer;
