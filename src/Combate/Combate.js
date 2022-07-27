import React, { useEffect, useState } from "react";
import searchPokemon from "../Api/Api";
import "../index.css"

const Combate = (props) => {

    const[search, setSearch] =  useState()

    const[pokemon1, setPokemon1] = useState()
    const[pokemon2, setPokemon2] = useState()

    const[hp1, setHp1] = useState(0)
    const[hp2, setHp2] = useState(0)

    const[disableAttack1, setDisableAttack1] = useState()
    const[disableAttack2, setDisableAttack2] = useState()

    const onChange1=(e) =>{
        setSearch(e.target.value)
    }

    const onChange2=(e) =>{
        setSearch(e.target.value)
    }

    const onClick1= async (e)=>{
        const data = await searchPokemon(search)
        setPokemon1(data)
        data.stats.map((stat)=>{
            if(stat.stat.name == 'hp'){
                setHp1(stat.base_stat)
            }
        })
    
    }
    const onClick2 = async(e)=>{
        const data = await searchPokemon(search)
        setPokemon2(data)
        data.stats.map((stat) => {
            if(stat.stat.name == 'hp'){
                setHp2(stat.base_stat)
            }
        })

    }

    const ataque_uno = async (e) => {
        setDisableAttack1(true)
        setDisableAttack2(false)
        const dmg1 = pokemon1?.stats?.map(stat => stat.stat.name === 'attack')
        console.log('El pokemon 1 ataco' + dmg1)
        setHp2(hp2 - dmg1)
    }

    const ataque_dos = () =>{
        setDisableAttack1(false)
        setDisableAttack2(true)
        const dmg2 = pokemon2.stats.find(stat => stat.stat.name === 'attack')
        console.log('El pokemon 2 ataco' + dmg2)
        setHp1(hp1 - dmg2.stat.base_stat)
    }

    return(
        <div className="pokemon-battle-container">
            <h1>Batalla Pokemon</h1>
            <div className="pokemon-box">
                <div className="pokemon-1-container">
                    <div className="pick-box1">
                        <h3>Buscar primer Pokemon</h3>
                        <input onChange={onChange1} placeholder="Buscar Pokemon.."/>
                        <button onClick={()=> onClick1()}>Elegir</button>
                    </div>
                    <div>
                        <div className="battle-1-box">
                            {pokemon1 && 
                            <div className="battle1-container">
                                <div className="name"> {pokemon1.name} </div>
                                <img src={pokemon1.sprites.front_default} />
                                <div> </div>
                            </div>}
                            <div>
                                <div>
                                    <button
                                        disabled={disableAttack2}
                                        onClick={()=>{ataque_uno('attack')}}
                                        >Atacar</button>
                                    Vida: {hp1}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="vs">
                    <h1>VS</h1>
                </div>
                <div className="pokemon-2-container">
                    <div className="pick-box2">
                        <h3>Buscar segundo Pokemon</h3>
                        <input onChange={onChange2} placeholder="Buscar Pokemon..."/>
                        <button onClick={onClick2}>Elegir</button>
                    </div>
                    <div>
                        <div className="battle-1-box">
                            {pokemon2 &&
                            <div className="battle2-container">
                                <div className="name"> {pokemon2.name} </div>
                                <img src={pokemon2.sprites.front_default}/>
                                <div> </div>
                            </div>}
                            <div>
                                <button
                                    disabled={disableAttack1}
                                    onClick={()=>{ataque_dos('attack')}}
                                    > Atacar</button>
                                Vida: {hp2}
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Combate