import { useState } from "react"

function Condicional(){

    const [email,setEmail] = useState()
    const [userEmail,setUserEmail] = useState()

    function enviarEmail(e){
        e.preventDefault()
        setUserEmail(email)
    }
    function limparEmail(){
        setUserEmail()
    }

    return (
        <div>
            <h2>Cadastre o seu E-mail</h2>
            <form>
                <input type="email" placeholder="Digite o seu e-mail..." onChange={(e)=>setEmail(e.target.value)}/>
            </form>
            <button onClick={enviarEmail}>Enviar-email</button>
            {userEmail && (
                <div>
                   <p> O e-email do usuario é: {userEmail}</p>
                   <button onClick={limparEmail}>Limpar e-email</button>
                </div>
            )}
        </div>
    )
}

export default Condicional