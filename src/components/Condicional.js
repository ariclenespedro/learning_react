import { useState } from "react";



function Condicional() {

    const [email, setemail] = useState();
    const [userEmail, setuserEmail] = useState();

    function submitEmail(e) {
        e.preventDefault();
        setuserEmail(email);
    } 

    function clear() {
        setuserEmail('');
        
    }

    return (
        <div>
            <h2>Cadastrar Email</h2>
            <form id="formAddEmail">
                <input type="email" id="email" placeholder="Digite o seu email" 
                onChange={ (e) => setemail(e.target.value) }   />
                <button type="submit" onClick={submitEmail}>Enviar email</button>
            </form>
            {userEmail && (
                <div>
                    <p> O email guardado é: {userEmail}</p>
                    <button onClick={clear}>Apagar</button>
                </div>
            )}
        </div>
    )
    
}

export default Condicional;