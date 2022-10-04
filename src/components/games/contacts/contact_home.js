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
                <table>

                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>contact's fullname</th>
                            <th>Contact's Bio</th>
                            <th>Contact's Groupe</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.length ? contacts.map((element, index)=>(<>
                            <tr key={element.id}>
                                <td key={index}> {index+1} </td>
                                <td key={index+100}> {element.name} {element.secondName} </td>
                                <td key={index+200}> {element.bio} </td>
                                <td key={index+300}> {element.groupe} </td>
                            </tr>
                        </>)) : <tr>
                            <td> here's</td>
                            <td>No</td>
                            <td> data </td>
                        </tr>}
                    </tbody>
                </table>
            </div>
            <Link to="/contact/create_contacts" >Create a contact</Link>
        </div>
    )
}