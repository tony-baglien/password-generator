import { useState } from "react";
import { ReactComponent as Lock } from "../../Images/lock.svg";
import "./LockContainer.css";

const LockContainer = () => {
    const [endShake, setEndShake] = useState(false);

    const handleEndShake = () => {
        setEndShake(true);
    };
    return (
        <div
            className={`lockContainer ${endShake ? "expand" : ""}`}
            onAnimationEnd={handleEndShake}
        >
            <Lock />
        </div>
    );
};

export default LockContainer;
