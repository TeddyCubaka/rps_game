import React from "react";


export default function CreateContacts (){
    return <>
        <form className="disp_column">
            <label forhtml="name">Contact name</label>
            <input type="text" name="name" id="name"/>
            <label forhtml="secondName">A second name</label>
            <input type="text" name="secondName" id="secondName"/>
            <select id="groupe" class="inputDuForm">
                <option id="groupeAmis" value="Amis">Amis</option>
                <option id="groupeFamille" value="Famille">Famille</option>
                <option id="groupeTravail" value="Travail">Travail</option>
                <option id="groupeCollègue" value="Collègue">Collègue</option>
            </select>
            <label forhtml="">Give a bio to your contact</label>
            <textarea maxLength="200"></textarea>
        </form>
    </>
}