function send(ev) {
   const titulo = document.getElementById('titulo')
   const author = document.getElementById('author')
   const content = document.getElementById('content')
   const pulaLinha = ' '+'<br>'
   const mostraDigitado = document.getElementById('show-post');

   mostraDigitado.innerHTML+="<p>"
   +titulo.value+pulaLinha+
   author.value+pulaLinha+
   content.value+

   "</p>"
   meuTexto.value='';
}

