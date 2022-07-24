import React, { useEffect, useState } from "react";

const Combate = (props) => {

    const[pokemon1, setPokemon1] = useState()
    const[pokemon2, setPokemon2] = useState()

    const[hp1, setHp1] = useState(0)
    const[hp2, setHp2] = useState(0)

    const[disableAttack1, setDisableAttack1] = useState()
    const[disableAttack2, setDisableAttack2] = useState()


    const attack1 = (dmg) => {
        console.log('el pokemon 1 ataco' + dmg)
        disableAttack1(true)
        disableAttack2(false)
        setHp2(hp2 - dmg)
    }
    const attack2 = (dmg) => {
        console.log('el pokemon 2 ataco' + dmg)
        disableAttack1(false)
        disableAttack2(true)
        setHp1(hp1 - dmg)
    }
    const handleChange1 = (e) => {
        setPokemon1(e.target.value)
    }
    const handleChange2 = (e) => {
        setPokemon2(e.target.value)
    }
    return(
        <div>
            <div>
                Elija el primer Pokemon
                <input onChange={(e) => handleChange1(e)} placeholder="Buscar Pokemon.."/>
                <button
                onClick={pokemon1}>Elejir</button>
                <img src={pokemon1.sprites?.front_default}/>
            </div>
        </div>
    )

}
export default Combate