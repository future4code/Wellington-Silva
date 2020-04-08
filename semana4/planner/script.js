	/*
		This is an adaption of the to-do-list I made a couple of days ago. I wanted to make the checkboxes disappear and only appear when hovered upon, but i was
		unable to get it to work. I got it to work for one but when you hover over the other items it would show the first items checkbox and not its checkbox. Still working the bugs out on that part. Hope you guys like the planner.
		
		Any suggestions for improvements is welcome :)
	*/

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

function popOffItem() {
	let checked_list = document.querySelectorAll('#check-box');
	let checked_list_item = document.querySelectorAll('.list-item');
	let lineBreaks = document.querySelectorAll('br');
	for (i=0; i < checked_list.length; i++) {
		if (checked_list[i].checked==true) {	  
			//Removing the Item from the Document
			let checkbox_elemt = checked_list[i];
			let item = checked_list_item[i];
			let removeBreakLine = lineBreaks[i];
			let parent1 = checkbox_elemt.parentNode;
			let parent2 = item.parentNode;
			let parent3 = removeBreakLine.parentNode;
			parent1.removeChild(checkbox_elemt);
			parent2.removeChild(item);
			parent3.removeChild(removeBreakLine);
		}else {
			continue;
		}
	}
}