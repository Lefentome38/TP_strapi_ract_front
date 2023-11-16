import { useCallback, useEffect, useState } from "react";
import Musique from "../composants/Musique";

export default function Home() {

    const [musiques_favorie,SetMusiques_favorie] = useState<any[]>([])
    const [musiques_ordre,SetMusiques_ordre] = useState<any[]>([])

    useEffect( () => {
        const getFavorites = async () => {
            const response = await fetch("http://localhost:1337/api/musics?filters[Favoris][$eq]=true&populate=*");
            const data = await response.json();
            SetMusiques_favorie(data.data)
        }
        getFavorites()
    }, [])

    useEffect(() => {
        const getOrdre = async () => { 
            const response = await fetch("http://localhost:1337/api/musics?sort=createdAt:desc&populate=*");
            const data = await response.json();
            SetMusiques_ordre(data.data)
        }
        getOrdre()
    },[])

    

    return (
        <>
            <h1>bienvenue</h1>
            <p>liste par ordre alphabétique</p>
                <div className="data_list">
                    {musiques_favorie.map((m: any, i) => (
                        <Musique key={i} 
                        Titre={m.attributes.Titre} 
                        Chanteurs_prenom={m.attributes.chanteur.data.attributes.prenom} 
                        Chanteurs_nom={m.attributes.chanteur.data.attributes.nom} 
                        couleur_font={m.attributes.couleur}
                        couleur_favorie={m.attributes.Favoris}
                        />
                    ))}
                </div>
            <p>liste favories </p>
                <div className="data_list">
                    {musiques_ordre.map((m: any, i) => (
                        <Musique key={i} 
                        Titre={m.attributes.Titre} 
                        Chanteurs_prenom={m.attributes.chanteur.data.attributes.prenom} 
                        Chanteurs_nom={m.attributes.chanteur.data.attributes.nom} 
                        couleur_font={m.attributes.couleur}
                        couleur_favorie={m.attributes.Favoris}
                        />
                    ))}
                </div>
        </>
    )
}