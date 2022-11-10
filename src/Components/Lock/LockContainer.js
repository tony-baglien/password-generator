import LockImage from "../LockImage/LockImage";
import styles from "./LockContainer.module.css";

const LockContainer = (props) => {
    return (
        <div
            className={
                styles.lockContainer +
                (props.isGenerate ? " " + styles.spin : "")
            }
        >
            <LockImage isGenerate={props.isGenerate} />
        </div>
    );
};

export default LockContainer;
