import React, { useContext } from 'react'
import { RobotContext, RobotImage, Robots } from './robotContext'

export default function RobotHome (){
    const robotDetails = {imageUrl : "",name : "",function : ""}
    const robotImage = useContext(RobotImage);
    const robots = useContext(Robots)
    return <>
        <RobotContext.Provider value={{robotImage, robots}}>
            <h2>Hey ! Wanna play a game ?</h2>
            <p>Then, create any robot you.</p>
            <button onClick={()=>{console.log(robots)}}>Click on me</button>
        </RobotContext.Provider>
    </>
}