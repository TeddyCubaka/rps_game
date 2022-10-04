import React, { useEffect, useState } from "react";

export default function Contact (){
    const [contacts, setContacts] = useState([])
    const arr = [];
    useEffect(()=>{
        const api = fetch('http://localhost:4000/api/contacts')
            .then((response)=> response.json().then((data)=> {
                data.map((elem)=> {
                    arr.push(elem);
                    setContacts(arr)
                }) 
            }))
            .catch((err)=> console.log(err))
    }, [])

    return (
        <div>
            <div>
                <ul>
                    {contacts.length ? contacts.map((element)=>(<>
                        <li key={element.id}> {element.name} </li>
                    </>)) : <span>Siuuu</span>}
                </ul>
                <div> {contacts.length} </div>
            </div>
            <button onClick={()=>{
                const quiz = prompt("Tu m'aimes ?", '')
                alert(quiz)
            }}>click me</button>
        </div>
    )
}