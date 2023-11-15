import { ChangeEvent, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Connexion() {
    const nagiv = useNavigate();

    const [Id,SetId] = useState<string>()
    const [Mot,SetMot] = useState<string>()

    const recup_Mot = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        SetMot(e.target.value)
    },[])

    const recup_id = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        SetId(e.target.value)
    },[])



    const handleConnection = useCallback( async () => {
        const response = await fetch("http://localhost:1337/api/auth/local", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                identifier: Id,
                password: Mot
            })
        });
        const data = await response.json();
        console.log(data);
        if(data.user){
            nagiv("/home")
        }
        else {
            console.log("error");
            SetId('')
            SetMot('')
        }
    }, [nagiv, Id, Mot])

    return (
        <>
            <h1>page de conexion</h1>
            <input type="text" placeholder="Identifiant" value={Id} onChange={recup_id}/>
            <input type="password" placeholder="Mot de passe" value={Mot} onChange={recup_Mot}/>
            <button onClick={handleConnection}>connexion</button>
        </>
    )
}