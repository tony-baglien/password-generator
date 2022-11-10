import styles from "./Header.module.css";

import Burger from "../Burger/Burger";
import Dropdown from "../DropDown/Dropdown";

import { useState } from "react";

const Header = (props) => {
    let [menuClicked, setMenuClicked] = useState(false);

    const handleMenuClick = () => {
        setMenuClicked(!menuClicked);
        console.log("clicked");
    };
    return (
        <header className={styles.header}>
            <Burger onClick={handleMenuClick} menuClicked={menuClicked} />
            <Dropdown
                menuClicked={menuClicked}
                onHandleNumbers={props.onHandleNumbers}
                onHandleLetters={props.onHandleLetters}
                onHandleSymbols={props.onHandleSymbols}
            />
        </header>
    );
};

export default Header;
