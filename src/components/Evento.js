import Button from "./eventos/Button";

function Evento() {

    function click() {
        document.getElementById('texto').innerText = "Tem uma nova informação no wallboard ";
    
    }
    return (
        <div>
            <p>Click para ver</p>
            {/* <button onClick={() => click("Você clicou no botão")}>botão</button> */}
            <p id="texto"></p>
            <Button event={click} value="Novo Walboard"/>
        </div>
    )
}

export default Evento