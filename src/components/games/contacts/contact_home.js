import React from "react";
import { Link } from "react-router-dom";
import ContactDisplayer from "./contacts_diplayer";

export default function Contact (){
    return (
        <div>
            <div>
                <ContactDisplayer  />
            </div>
            <div>
                <Link to="/contact/create_contacts">Create a contact</Link>
                <Link to="/contact/modifie_contact">Modifie a contact</Link>
            </div>
        </div>
    )
}