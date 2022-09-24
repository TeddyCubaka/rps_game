import React from "react";
import { createContext } from "react";

const RobotImageContext = createContext([
  {
    name : "Tom",
    imageUrl : "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Robot_icon.svg/48px-Robot_icon.svg.png",
    alt : "Tom's profil, tom is a robot"
  },
  {
    name : "Thomas",
    imageUrl : "https://uxwing.com/wp-content/themes/uxwing/download/internet-network-technology/non-fungible-tokens-nft-icon.svg",
    alt : "Thomas's profil, Thomas is a robot"
  },
  {
    name : "Rori",
    imageUrl : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Robot_icon_broken.svg/20px-Robot_icon_broken.svg.png",
    alt : "Rori's profil, Rori is a robot"
  },
  {
    name : "Luffy",
    imageUrl : "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Robot_icon_%28WMF%29.svg/48px-Robot_icon_%28WMF%29.svg.png?20200529100310",
    alt : "Luffy's profil, Luffy is a robot"
  },
  {
    name : "Bucky",
    imageUrl : "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Robot_ic%C3%B4n.svg/91px-Robot_ic%C3%B4n.svg.png?20091011105542",
    alt : "Bucky's profil, Bucky is a robot"
  },
]);

const RobotContext = createContext([]);

export { RobotContext, RobotImageContext };
