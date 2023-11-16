import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"

// { 
//     "data": {
//         "titre": "TU M'AS COMPRIS",
//         "lien_youtube": "https://www.youtube.com/watch?v=CEn0vVfA_hE",
//         "chanteur": 3,
//         "favories": true,
//         "dete_de_sortie": "2022-01-28",
//         "couleur":"#134522"
//     }
// }

function Ajouter_music() {

    const [tab_chanteur,SetTab_chanteur] = useState<any[]>([])

    const [titre,SetTire] = useState<string>()
    const [chanteur,SetChanteur] = useState<any>()
    const [dds,SetDdt] = useState<string>()
    const [couleur,SetCouleur] = useState<string>()
    const [favories,SetFavories] = useState<boolean>()
    const [lien_youtube,SetLien_Youtube] = useState<string>()

    const navig_back = useNavigate();
    const back_list_music = useCallback(() => {
        navig_back("/home")
    },[])

    useEffect( () => {
        const aaa = async () => {
            const response = await fetch("http://localhost:1337/api/chanteurs");
            const data = await response.json();
            SetTab_chanteur(data.data)
        }
        aaa()
    }, [])
        
    const recup_titre = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        SetTire(e.target.value)
    },[])

    const recup_chanteur = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
        SetChanteur(e.target.value)
    },[])

    const recup_annee = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        SetDdt(e.target.value)
    },[])
    
    const button_ajouter_music = useCallback( async () => {
        const response = await fetch("http://localhost:1337/api/musics", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                data:{
                    titre: titre,
                    lien_youtube: lien_youtube,
                    favories: favories,
                    dete_de_sortie: dds,
                    couleur: couleur,
                    chanteur: chanteur
                }
            })
        });
        const data = await response.json();
        console.log(data);
    }, [titre,chanteur,dds])


    return (
          <>
            <div className="body_formulaire_ajout">
                <h1>Ajouter music</h1>
                <p onClick={back_list_music}>Back</p>
                <div className="formulaire_ajout_music">
                    <input type="text" placeholder="titre" onChange={recup_titre}/>
                    <select name="chanteur_selecte" id="...">
                        <option value="">--chanteur--</option>
                        {tab_chanteur.map((m: any, i:number) => (
                            <option key={i} onChange={recup_chanteur} value={m.attributes.nom}>{m.attributes.nom}</option>
                        ))}
                    </select>
                    {/* <input type="text" placeholder="Chanteur" onChange={recup_chanteur}/> */}
                    <input type="text" placeholder="Année" onChange={recup_annee}/>
                    <input type="text" placeholder="Couleur" />
                    <input type="checkbox" />
                    <input type="text" placeholder="Lien Youtube"/>
                    <button onClick={button_ajouter_music}>Ajouter</button>
                </div>
            </div>
          </>
      )
  }
  
  export default Ajouter_music