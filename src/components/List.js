import Item from "./Item";

function List() {
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Hyundai"  ano_lancamento={1998}/>
                <Item marca="Mercedes Benz"  ano_lancamento={1904}/>
                <Item marca="Ford Raptor"  ano_lancamento={2007}/>
                <Item marca="Toyota Carina"  ano_lancamento={2002}/>
            </ul>
        </>
        
    )
}

export default List