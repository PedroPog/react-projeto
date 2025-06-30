import Button from "./evento/Button";

function Evento({numero}){

    function eventClick(){
        console.log("Ativado Primeiro Evento!");
    }

    function segundoEvento(){
        console.log("Ativando o segundo evento!")
    }

    return (
        <div>
            <p>Clique aqui para realziar evento</p>
            <Button event={eventClick} text="Primeiro Evento" />
            <Button event={segundoEvento} text="Primeiro Evento" />
        </div>
    )
}
export default Evento