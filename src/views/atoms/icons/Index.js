import React from "react";
import Burger from "./BurgerIcon";
import Smile from "./SmileIcon";

const Icon = props => {
    switch (props.name) {
        case "Burger":
            return <Burger {...props} />;
        case "Smile":
            return <Smile {...props} />;
        default:
            return;
    }
}

export default Icon;