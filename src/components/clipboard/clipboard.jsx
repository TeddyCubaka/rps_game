import React, { useState, useRef } from "react"

export default function TextArea(){
    const [text, setText] = useState('Ce text est à Copier');
    const [copy, setCopy] = useState('Copier')
    const myText = useRef();
    const reseterCopy = () => {
      setTimeout(()=>{
        setCopy('Copier')
      }, 3000)
    }

    return (
      <div className="wrapper">
        <textarea rows="10" ref={myText } value={text} onChange={(e)=> {
          setText(e.target.value)
          }} ></textarea>
        <button onClick={()=>{
          if(text.length){
            navigator.clipboard.writeText(text).then(()=>{
              if(copy == 'Copier')setCopy('Text copier dans le presse-papier !');
              reseterCopy();
            })
          }           
        }}> {copy} </button>
      </div>
    )
} 