function Pessoa(props) {

    return (
        <div>
            <p>Nome : {props.nome}</p>
            <p>Email : {props.email}</p>
            <p>Profissao : {props.profissao}</p>
        </div>
    )
    
}

export default Pessoa;