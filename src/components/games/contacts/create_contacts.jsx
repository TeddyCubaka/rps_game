import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function CreateContacts (){
    const [src, setSrc] = useState("")
    const [name, setName] = useState("")
    const [secondName, setSecondName] = useState("")
    const [bio, setBio] = useState("")
    const [groupe, setGroupe] = useState("Amis")
    const [count, setCount] = useState(0)
    const datas = {
        count : 0,
        name : name,
        secondName : secondName,
        groupe : groupe,
        imageUrl : src, 
        bio : bio
    }
    const [data, setData] = useState([])

    useEffect(()=>{
        if(data.count == count){
            fetch('http://localhost:4000/api/contacts', {
                method: "POST",
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                },
                body: JSON.stringify(data)
            }).then((res)=>res.json()).then(data=> console.log(data))
        }
    }, [data])
    return <div className="disp_column">
        <div>
            <Link to="/contact">Return to contact home</Link>
        </div>
        <form className="disp_column">

            <label forhtml="name">Contact name</label>
            <input type="text" name="name" id="name" onChange={(e)=>{setName(e.target.value)}}/>

            <label forhtml="secondName">A second name</label>
            <input type="text" name="secondName" id="secondName" onChange={(e)=>{setSecondName(e.target.value)}}/>

            <select id="groupe" onChange={(e)=>{setGroupe(e.target.value)}}>
                <option id="groupeAmis" value="Amis">Amis</option>
                <option id="groupeFamille" value="Famille">Famille</option>
                <option id="groupeTravail" value="Travail">Travail</option>
                <option id="groupeCollègue" value="Collègue">Collègue</option>
            </select>

            <label forhtml="">Give a bio to your contact</label>
            <textarea maxLength="200" onChange={(e)=>{setBio(e.target.value)}}></textarea>

            <input type="file" id="upload" name="icon" accept="image/jpeg, image/png, image/jpg" onChange={(e)=>{
                const [ url ] = e.target.files;

                setSrc(URL.createObjectURL(url));
                }}/>
            {src !== "" ? 
                <img src={src} id="display-image" className="image_init" alt="previsualiser votre image"/>
            : false}

            <input type="button" name="submit" value="submit" onClick={()=>{
                if(name !== "", secondName !== ""){
                    setCount(count+1)
                    console.log(count)
                    datas.count = count+1;
                    setData(datas)
                    console.log(data)
                }else{
                    alert('Remplissez toute les case nous vous prions')
                }

            }} />
        </form>
    </div>
}