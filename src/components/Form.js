import { useState } from "react";
function Form() {

    function registrar(e) {
        e.preventDefault();
        document.getElementById('info').innerText = "O utilizador "+nome+ " com a senha " + senha;
    }

    const [nome,setnome] = useState();
    const [senha,setsenha] = useState();
    return(
        <div>
            <form id="myForm" onSubmit={registrar}>
                <div>
                    <label htmlFor="nome">Nome: </label>
                    <input type="text" id="nome" placeholder="Digite o nome do utilizador  "
                    onChange={(e) => setnome(e.target.value)} />
                </div>
                <div>
                <label htmlFor="senha">Senha: </label>
                    <input type="password" id="senha" placeholder="Digite uma senha"
                    onChange={(e) =>(setsenha(e.target.value))}/>
                </div>
                <div>
                    <input type="submit" value={"Cadastrar"} />
                </div>
                    
                
            </form>

            <div id="containerInfo">
                <h2>Informações</h2>
                <p id="info"></p>
            </div>
        </div>

        
    )
}

export default Form;