import { useCallback, useState } from "react";

export default function Home() {

    const [musiques,SetMusiques] = useState<any[]>([])

    const musique = useCallback( async () => { //POST
        const response = await fetch("http://localhost:1337/api/musics?filters[Favoris][$eq]=true&populate=*");
        const data = await response.json();
        console.log("get_musique",data.data);
        SetMusiques(data.data)
    }, [])

    const music_test = useCallback(async() =>{ //GET ?
        const response = await fetch("http://localhost:1337/api/musics?sort=createdAt:desc&populate=*");
        const data = await response.json();
        SetMusiques(data.data)
        console.log("get_favorie_music",data);
    },[])

    return (
        <>
            <h1>bienvenue</h1>
            <button onClick={musique}>musique favorie</button>
            <button onClick={music_test}>musique ordre</button>
            <div className="data-list">
                {musiques.map( (m: any, i) => (
                    <div key={i} className="musique">
                        <div className="titre">{m.attributes.Titre}</div>
                        <div className="chanteur">{m.attributes.chanteur.data.attributes.prenom} {m.attributes.chanteur.data.attributes.nom}</div>
                    </div>
                ))}
                
            </div>
        </>
    )
}