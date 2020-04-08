function addItem() {
	let item = document.getElementById('task').value;
	let dia = document.getElementById('dias').value;
	let novoItem = document.createElement('li');

	
	let novaLinha = document.createElement('br');
	novoItem.setAttribute('class','list-item')
	novoItem.textContent = item;

	if (dia == 'segunda') {
		document.getElementById('segunda').appendChild(novoItem);
		document.getElementById('segunda').appendChild(novaLinha);
	} else if (dia == 'terca'){
		document.getElementById('terca').appendChild(novoItem);
		document.getElementById('terca').appendChild(novaLinha);
	}else if (dia == 'quarta') {
		document.getElementById('quarta').appendChild(novoItem);
		document.getElementById('quarta').appendChild(novaLinha);
	} else if (dia == 'quinta') {
		document.getElementById('quinta').appendChild(novoItem);
		document.getElementById('quinta').appendChild(novaLinha);
	} else if (dia == 'sexta') {
		document.getElementById('sexta').appendChild(novoItem);
		document.getElementById('sexta').appendChild(novaLinha);
	} else if (dia == 'sabado') {
		document.getElementById('sabado').appendChild(novoItem);
		document.getElementById('sabado').appendChild(novaLinha);
	} else if (dia == 'domingo') {
		document.getElementById('domingo').appendChild(novoItem);
		document.getElementById('domingo').appendChild(novaLinha);
	}
	document.getElementById('task').value = "";
}

