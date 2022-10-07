import { useState, useEffect }  from "react" 

const Hooks = () => {

    let idade = 30
    const [novaIdade, setNovaIdade] = useState(40)

    const changeAge = () => {
        idade = idade + 1;
    
    };

    const changeNewAge = () => {
        setNovaIdade(45)
    };

    useEffect (() => {
        console.log('testandoooooo')
    })

    return (
        <div> 
            <p id="ida"> Idade: {idade}</p>
            <button onClick={changeAge}>Mudar idade</button>
            <p id="ida"> Idade: {novaIdade}</p>
            <button onClick={changeNewAge}>Mudar nova idade</button>
        </div>
    )
}

export default Hooks