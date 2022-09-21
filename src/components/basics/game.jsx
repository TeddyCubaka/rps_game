import React from "react";
import { useState } from "react"

export default function TextArea(){
    const [text, setText] = useState('Copier')
    return (
      <div class="wrapper">
        <textarea rows="10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</textarea>
        <button onClick={()=>{
            editor.select();
            document.execCommand("copy");
            setText("Copié !");
        }}> {text} </button>
      </div>
    )
} 