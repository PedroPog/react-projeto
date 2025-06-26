function Evento(){

    function eventClick(){
        console.log("ATivo!");
    }

    return (
        <div>
            <p>Clique aqui para realziar evento</p>
            <button onClick={eventClick}>Ativar</button>
        </div>
    )
}
export default Evento