function adicionarItem(){
	const meuInput = document.getElementById('meuInput')

	const minhaLista = document.getElementById("minhaLista")

	minhaLista.innerHTML += "<li>"+meuInput.value+"</li>"
}