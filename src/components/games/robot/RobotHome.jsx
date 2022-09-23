import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { RobotContext, RobotImageContext } from './robotContext'

export default function RobotHome (){
    const robotDetails = {imageUrl : "",name : "",function : ""}
    const robotImage = useContext(RobotImageContext);
    const robots = useContext(RobotContext);
    return (
        <RobotContext.Provider value={{robotImage, robots, robotDetails}}>
            <h2>Hey ! Wanna play a game ?</h2>
            <p>Then, create any robot you.</p>
            <table>
                <thead>
                    <tr>
                        <th>Vos robots</th>
                        <th>Les robots par default</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <td>Créer un robot</td>
                        <td> 
                            <Link to="/robot">Create a robot</Link>
                        </td>
                    </tr>
                </tfoot>
                <tbody>
                    {
                        robotImage.map((image, index)=>(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td><img src={image} alt="" className='img-test'/></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <button onClick={()=>{
                robotImage.map((element)=>(robots.push(element)));
                robots.push('2');
                console.log(robots);
            }}>Click me</button>

        </RobotContext.Provider>
    )
}