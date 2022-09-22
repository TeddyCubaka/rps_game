import React, { useEffect } from "react";
import { useState, useRef } from "react"

export default function TextArea(){
    const [text, setText] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiuLettre de motivation : Birhingingwa Cubakasmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.');
    const [copy, setCopy] = useState('Copier')
    const myText = useRef();

    return (
      <div class="wrapper">
        <textarea rows="10" ref={myText } value={text} onChange={(e)=> {
          setText(e.target.value)
          console.log(text);
          }} ></textarea>
        <button onClick={()=>{
          if(text.length){
            navigator.clipboard.writeText(text).then(()=>{
              if(copy == 'Copier')setCopy('Copié !');
              console.log('coping','true') 
            })
          }           
        }}> {copy} </button>
      </div>
    )
} 