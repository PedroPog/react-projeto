import Item from "./Item";

function List(){

    return(
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Fiat" ano_lancamento={2000}/>
                <Item marca="Renault" ano_lancamento="1999"/>
                <Item ano_lancamento={2002}/>
            </ul>
        </>
    );
}

export default List