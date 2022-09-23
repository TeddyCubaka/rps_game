import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { RobotContext, RobotImageContext } from './robotContext';
import './robot-style.css';

export default function RobotHome (){
    const robotImage = useContext(RobotImageContext);
    const robots = useContext(RobotContext);
    const robotDetails = {imageUrl : "",name : "",function : ""}

    return (
        <RobotContext.Provider value={{robotImage, robots, robotDetails}}>
            <div className='robot-home'>
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
                                    <td>{index+1}  
                                        {robots[index] ? 
                                        <div>
                                            <img src={robots[index].imageUrl} alt='' className='img-test'/>
                                            <div>Name : {robots[index].name} </div>
                                            <div>Function : {robots[index].function} </div>
                                        </div> : <span> ... </span>}
                                    </td>
                                    <td><img src={image} alt="" className='img-test'/></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <div>
                    {robots.length ? robots.map((robot, index)=>(
                        <div key={index}>
                            <img src={robot.imageUrl} alt='' className='img-test'/>
                            <div>Name : {robot.name} </div>
                            <div>Function : {robot.function} </div>
                        </div>
                    )) : <span>Siuuu</span>}
                </div>
            </div>
        </RobotContext.Provider>
    )
}