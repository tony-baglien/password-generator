import Title from "../Title/Title";
import styles from "./Container.module.css";
import LockContainer from "../Lock/LockContainer";
import PasswordContainer from "../PasswordContainer/PasswordContainer";
import GenerateButton from "../GenerateButton/GenerateButton";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import { useEffect, useState } from "react";
import Header from "../Header/Header/Header";

const Container = () => {
    const stars = Array(7).fill(<FontAwesomeIcon icon={faStar} />);
    //states
    const [generateAnimation, setGenerateAnimation] = useState(false);
    const [password, setPassword] = useState(stars);

    const [letters, setLetters] = useState(true);
    const [numbers, setNumbers] = useState(true);
    const [symbols, setSymbols] = useState(true);

    const randomFunc = {
        letters: getRandomUpper,
        numbers: getRandomNumber,
        symbols: getRandomSymbol,
    };

    const generatePassword = () => {
        let password = [];
        let typesCount = letters + numbers + symbols;
        let typesArr = [{ letters }, { numbers }, { symbols }].filter(
            (item) => Object.values(item)[0]
        );

        if (typesCount === 0) {
            return "";
        }
        for (let i = 0; i < 6; i += typesCount) {
            typesArr.forEach((type) => {
                const funcName = Object.keys(type)[0];
                password.push(randomFunc[funcName]());
            });
        }
        return password;
    };

    //generator function - http://www.net-comber.com/charset.html

    function getRandomUpper() {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    }
    function getRandomNumber() {
        return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
    }
    function getRandomSymbol() {
        const symbols = "!@#$%^&*(){}[]=<>/,.";
        return symbols[Math.floor(Math.random() * symbols.length)];
    }

    const handleClick = () => {
        setGenerateAnimation(true);
        setPassword(generatePassword());
    };

    const handleLetters = () => {
        setLetters(!letters);
    };
    const handleNumbers = () => {
        setNumbers(!numbers);
    };
    const handleSymbols = () => {
        setSymbols(!symbols);
    };
    return (
        <div className={styles.container}>
            <Header
                onHandleLetters={handleLetters}
                onHandleNumbers={handleNumbers}
                onHandleSymbols={handleSymbols}
            />
            <Title />
            <LockContainer isGenerate={generateAnimation} />
            <PasswordContainer password={password} />
            <GenerateButton onClick={handleClick} />
        </div>
    );
};

export default Container;
