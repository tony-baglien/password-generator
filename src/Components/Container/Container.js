import Title from "../Title/Title";
import styles from "./Container.module.css";
import LockContainer from "../Lock/LockContainer";
import PasswordContainer from "../PasswordContainer/PasswordContainer";

const Container = () => {
    return (
        <div className={styles.container}>
            <Title />
            <LockContainer />
            <PasswordContainer />
        </div>
    );
};

export default Container;
