function click(texto) {
    document.getElementById('texto').innerText = texto;

}

function Evento() {
    return (
        <div>
            <p>Click para ver</p>
            <button onClick={() => click("Você clicou no botão")}>botão</button>
            <p id="texto"></p>
        </div>
    )
}

export default Evento