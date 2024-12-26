
import { useState } from "react"
export default function Player({playerName,playerSymbol,isActive,handlePlayerName}){
    const [isEditing,setIsEditing]=useState(false)
    const [name,setName]=useState(playerName)
    function EditHandle(){
        setIsEditing((editing)=>!editing)
        handlePlayerName({[playerSymbol]:name})
        
    }

    function handleChange(event){
        setName(event.target.value)
     
        
       
        
    }
    const playerNameField=<span className="player-name">{name}</span>
    const playerInputField=<input type="text" className="player-name" value={name} onChange={handleChange}></input>
    return (<li className={isActive?"active":undefined}>
    <span className="player">
        { isEditing ? playerInputField:playerNameField}
    <span className="player-symbol">{playerSymbol}</span>
    <button onClick={EditHandle}>{!isEditing?"Edit":"Save"}</button>
    </span>
  </li>)

}