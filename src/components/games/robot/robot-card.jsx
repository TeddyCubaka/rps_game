import React from "react";

export default function RobotCard (){
    return (
        <div>
            {robots.length ? robots.map((robot, index)=>(
                <div key={index}>
                    <img src={robot.imageUrl} alt='' className='img-test'/>
                    <div>Name : {robot.name} </div>
                    <div>Function : {robot.function} </div>
                </div>
            )) : <span>Siuuu</span>}
        </div>
    )
}