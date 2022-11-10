import styles from "./GenerateButton.module.css";
import React from "react";

const GenerateButton = (props) => {
    return (
        <button onClick={props.onClick} className={styles.button}>
            Generate Password
        </button>
    );
};

export default GenerateButton;
