function Musique(props: {Titre: any, Chanteurs_prenom:any, Chanteurs_nom:any, couleur_font:any, couleur_favorie:any}) {
      return (
            <>
                <div className="div_music" style={{backgroundColor: props.couleur_font}}>
                    <p className="titre_music">{props.Titre}</p>
                    <p className="chanteur_music">chanteur: {props.Chanteurs_prenom} {props.Chanteurs_nom}</p>
                            <p className="favorie" style={{color: props.couleur_favorie ? "orange" : "black"}}>&#x2605;</p>
                </div>
            </>
        )
    }
    
    export default Musique