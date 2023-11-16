import { useCallback } from "react";
import { useNavigate } from "react-router-dom"

function modifier_music() {

    const navig_back = useNavigate();
    const back_list_music = useCallback(() => {
        navig_back("/home")
    },[])
    return (
          <>
            <h1>modifier music</h1>
            <p onClick={back_list_music}>Back</p>
          </>
      )
  }
  
  export default modifier_music