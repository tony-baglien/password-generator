import styles from "./Burger.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

const Burger = (props) => {
    return (
        <FontAwesomeIcon
            onClick={props.onClick}
            className={styles.burger}
            icon={props.menuClicked ? faX : faBars}
        />
    );
};

export default Burger;
