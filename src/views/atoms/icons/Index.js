import React from "react";
import Burger from "./BurgerIcon";

const Icon = props => {
    switch (props.name) {
        case "Burger":
            return <Burger {...props} />;
        default:
            return;
    }
}

export default Icon;