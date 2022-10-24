import LockImage from "../LockImage/LockImage";
import styles from "./LockContainer.module.css";

const LockContainer = () => {
    return (
        <div className={styles.lockContainer}>
            <LockImage />
        </div>
    );
};

export default LockContainer;
