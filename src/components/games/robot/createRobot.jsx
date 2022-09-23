import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { RobotContext, RobotImageContext } from "./robotContext";

export default function CreateRobot (){
    const robots = useContext(RobotContext);
    const robotImage = useContext(RobotImageContext)
    const robotDetails = {imageUrl : "",name : "",function : ""}
    const [error, setError] = useState('')
    return (
        <div className="create-div">
            <label forhtml='name'>Name your robot</label>
            <input type='text' id='name' name='name' required onChange={(e)=>{
                robotDetails.name = e.target.value;
            }} />
            <ul>
                <details>
                    <summary>Choose a profil for your robot</summary>
                    {
                        robotImage.map((image, index)=>(
                            <img src={image} alt='' key={index} className='img-test' onClick={()=>{
                                robotDetails.imageUrl = image;
                            }} />
                        ))
                    }
                </details>
            </ul>
            <label forhtml='name'>Give a funcion to your robot</label>
            <input type='text' id='name' name='name' required onChange={(e)=>{
                robotDetails.function = e.target.value;
            }}/>
            <button onClick={(e)=>{
                if(robotDetails.name !== '' && robotDetails.imageUrl !== '' && robotDetails.function !== ''){
                    robots.push(robotDetails);
                    setError('')
                }else {
                    setError('Remplissez tout les champs')
                }
            }}>Create a new robot</button>
            <Link to='/'>Back to home</Link>
            <span> {error} </span>
        </div>
    )
}