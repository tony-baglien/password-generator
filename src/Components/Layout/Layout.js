import styles from "./Layout.module.css";

const Layout = (props) => {
    return <div className={styles.background}>{props.children}</div>;
};

export default Layout;
