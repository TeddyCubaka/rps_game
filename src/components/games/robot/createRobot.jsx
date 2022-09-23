import React, { useContext } from "react";
import { RobotContext, RobotImageContext } from "./robotContext";

export default function CreateRobot (){
    const robots = useContext(RobotContext);
    const robotImage = useContext(RobotImageContext)
    return (
        <form>
            <label for='name'>Name your robot</label>
            <input type='text' id='name' name='name' required />
            <ul>
                <details>
                    <summary>Choose a profil for your robot</summary>
                    {
                        robotImage.map((image, index)=>(
                            <img src={image} alt='' key={index} className='img-test' />
                        ))
                    }
                </details>
            </ul>
            <label for='name'>Give a funcion to your robot</label>
            <input type='text' id='name' name='name' required />
            <button>Create a new robot</button>
        </form>
    )
}