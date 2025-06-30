function Saudacao({nome}){
    
    function gerarSaudacao(algunNome){
        return nome ? `Olá, ${algunNome}, tudo bem?`:'';
    }

    return <><p>{gerarSaudacao(nome)}</p></>
    // Pode ser utilizado assim tbm
    // return <>{nome && <p>{gerarSaudacao(nome)}</p>}</>
}

export default Saudacao