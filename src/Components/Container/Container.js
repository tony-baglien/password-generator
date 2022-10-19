import Title from "../Title/Title";
import styles from "./Container.module.css";
import LockContainer from "../Lock/LockContainer";

const Container = () => {
    return (
        <div className={styles.container}>
            <Title />
            <LockContainer />
        </div>
    );
};

export default Container;
