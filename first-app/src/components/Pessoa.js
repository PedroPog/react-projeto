import styles from './Pessoa.module.css';

function Pessoa({nome,idade,profissao,foto}){
    return <div className={styles.container}>
        <img src={foto} alt={nome} />
        <h2>Nome: {nome}</h2>
        <p>Idade: {idade}</p>
        <p>Profissao: {profissao}</p>
    </div>
}
export default Pessoa