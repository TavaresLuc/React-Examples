

const AnotherComponent = () => {
    const handleClick = () => {
    console.log('TESTE');
    };

    return (
        <div> 
            <p> Segundo componente</p>
            <button onClick={handleClick}> Evento </button>
            <hr />
            <button onClick={() => console.log('Clicou')}> Evento 2</button>
        </div>
    )
}

export default AnotherComponent