import React from 'react'
import { RobotContext } from './robotContext'

export default function RobotHome (){
    return <>
        <RobotContext.Provider>
            <h2>Hey ! Wanna play a game ?</h2>
            <p>Then, create any robot you.</p>
        </RobotContext.Provider>
    </>
}