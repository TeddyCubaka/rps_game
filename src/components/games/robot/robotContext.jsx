import React from "react";
import { createContext } from "react";

const Robots = createContext([])
const RobotImage = createContext({
    image1 : "https://uxwing.com/robotics-icon/",
    image2 : "https://uxwing.com/neuromorphic-computing-icon/",
    image3 : "https://uxwing.com/cloud-computing-icon/",
    image4 : "https://uxwing.com/wp-content/themes/uxwing/download/internet-network-technology/non-fungible-tokens-nft-icon.svg",
    image5 : "https://uxwing.com/vr-headset-icon/"
})

export const RobotContext = createContext([Robots, RobotImage])