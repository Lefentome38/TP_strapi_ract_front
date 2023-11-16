import { useCallback } from "react";
import { useNavigate } from "react-router-dom"

function Musique(props: {titre: string, Chanteurs_prenom:string, Chanteurs_nom:string, couleur_font:string, couleur_favorie:boolean}) {
    
    const navig_modifier_music = useNavigate();
    const modifier_music = useCallback(() => {
        navig_modifier_music("/modifier_music")
    },[])
    
    return (
            <>
                <div className="div_music" onClick={modifier_music} style={{backgroundColor: props.couleur_font}}>
                    <p className="titre_music">{props.titre}</p>
                    <p className="chanteur_music">chanteur: {props.Chanteurs_prenom} {props.Chanteurs_nom}</p>
                    <p className="favorie" style={{color: props.couleur_favorie ? "orange" : "black"}}>&#x2605;</p>
                </div>
            </>
        )
    }
    
    export default Musique