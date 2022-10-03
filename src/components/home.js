import React from "react";
import { Link } from "react-router-dom";

export default function Home (){
    return (
        <div className="disp_column">
            <h2>Wanna play which games ?</h2>
            <Link to="robot">Do you wont to create robot's</Link>
            <Link to="clipboard">Copy texts ?</Link>
            <Link to="contact">Or create contacts</Link>
        </div>
    )
}