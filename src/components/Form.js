function registrar(e) {
    e.preventDefault();
    document.getElementById('info').innerText = "Registrado com sucesso";
}


function Form() {
    return(
        <div>
            <form id="myForm" onSubmit={registrar}>
                <div>
                    <label>Nome: </label>
                </div>
                <div>
                    <input type="text" placeholder="Digite o nome do utilizador  "/>
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