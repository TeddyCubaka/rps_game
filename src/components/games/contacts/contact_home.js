import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Contact (){
    const [contacts, setContacts] = useState([])
    const arr = [];
    useEffect(()=>{
        fetch('http://localhost:4000/api/contacts')
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
            <Link to="/contact/create_contacts" >Create a contact</Link>
        </div>
    )
}