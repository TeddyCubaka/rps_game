import React from "react";
import { createContext } from "react";

const RobotImageContext = createContext([
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Robot_icon.svg/48px-Robot_icon.svg.png',
    "https://uxwing.com/wp-content/themes/uxwing/download/internet-network-technology/non-fungible-tokens-nft-icon.svg",
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Robot_icon_broken.svg/20px-Robot_icon_broken.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Robot_icon_%28WMF%29.svg/48px-Robot_icon_%28WMF%29.svg.png?20200529100310',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Robot_ic%C3%B4n.svg/91px-Robot_ic%C3%B4n.svg.png?20091011105542'
])
const RobotContext = createContext([]);

export { RobotContext , RobotImageContext};