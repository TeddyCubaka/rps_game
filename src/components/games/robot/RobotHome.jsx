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
                        <td>Voir la list des robots</td>
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

        </RobotContext.Provider>
    </>
}