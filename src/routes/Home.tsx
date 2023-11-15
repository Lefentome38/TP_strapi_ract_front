import { useCallback, useState } from "react";

export default function Home() {

    const [Titre,SetTitre] = useState<string[]>([])

    const handleConnection = useCallback( async () => { //POST
        const response = await fetch("http://localhost:1337/api/musics?filters[Favoris][$eq]=true", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                titre: Titre,
            })
        });
        const data = await response.json();
        const addresses: string[] = data.features.map(
            (feature: any) => feature.properties.label
        )
        console.log(addresses);
    }, [])

    const music_test = useCallback(async() =>{ //GET ?
        const response = await fetch("http://localhost:1337/api/musics?filters[Favoris][$eq]=true");
        const data = await response.json();
        console.log(data);
    },[])

    return (
        <>
            <h1>bienvenue</h1>
            <button onClick={handleConnection}>X</button>
            <button onClick={music_test}>A</button>
            <p>{Titre}</p>
        </>
    )
}