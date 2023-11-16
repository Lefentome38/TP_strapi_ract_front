import { useCallback, useEffect, useState } from "react";
import Musique from "../composants/Musique";
import { useNavigate } from "react-router-dom";

export default function Home() {

    const [musiques_favorie,SetMusiques_favorie] = useState<any[]>([])
    const [musiques_ordre,SetMusiques_ordre] = useState<any[]>([])

    const navig_ajout_music = useNavigate();

    useEffect( () => {
        const getFavorites = async () => {
            const response = await fetch("http://localhost:1337/api/musics?filters[favories][$eq]=true&populate=*");
            const data = await response.json();
            SetMusiques_favorie(data.data)
        }
        getFavorites()
    }, [])

    useEffect(() => {
        const getOrdre = async () => { 
            const response = await fetch("http://localhost:1337/api/musics?sort=titre:asc&populate=*"); // pas dans l'ordre alphabé
            const data = await response.json();
            SetMusiques_ordre(data.data)
        }
        getOrdre()
    },[])

    const ajout_music = useCallback(() => {
        navig_ajout_music("/ajouter_music")
    },[])
    
    return (
        <>
            <h1>bienvenue</h1>
            <p className="button_ajout_music" onClick={ajout_music}>+</p>
            <p>liste par ordre alphabétique</p>
                <div className="data_list">
                    {musiques_favorie.map((m: any, i) => (
                        <Musique key={i} 
                        titre={m.attributes.titre} 
                        Chanteurs_prenom={m.attributes.chanteur.data.attributes.prenom} 
                        Chanteurs_nom={m.attributes.chanteur.data.attributes.nom} 
                        couleur_font={m.attributes.couleur}
                        couleur_favorie={m.attributes.favories}
                        />
                    ))}
                </div>
            <p>liste favories </p>
                <div className="data_list">
                    {musiques_ordre.map((m: any, i) => (
                        <Musique key={i} 
                        titre={m.attributes.titre} 
                        Chanteurs_prenom={m.attributes.chanteur.data.attributes.prenom} 
                        Chanteurs_nom={m.attributes.chanteur.data.attributes.nom} 
                        couleur_font={m.attributes.couleur}
                        couleur_favorie={m.attributes.favories}
                        />
                    ))}
                </div>
        </>
    )
}