
 /* EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta' 
 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
*/


   alert ("Bem vindo ao jogo de BlackJack!");
   if(confirm("Deseja iniciar uma nova rodada?")){
      
     /*  Pontos e cartas de jogador e IA que começam no zero */
      let pontosDoJogador = 0;
      let pontosdaIA = 0;
      let cartasdoJogador = "Usuário - cartas: ";
      let cartasDaIA = "Computador - cartas: ";

       
     /*  Aqui começa a ser declarados quantas cartas e pontos de cada uma */
      for(let i=0; i<2; i++){
         let carta = comprarCarta(); 
         cartasdoJogador += carta.texto+" "
         pontosDoJogador += carta.valor;
         carta = comprarCarta(); 
         cartasDaIA += carta.texto+" "
         pontosdaIA += carta.valor;
      }
       
      console.log(cartasdoJogador + " - pontuação ", pontosDoJogador)
      console.log(cartasDaIA + " - pontuação ", pontosdaIA)
    
       /*  Comparando os pontos do jogador e IA,
       
        Se pontosDoJogador > pontosdaIA e os pontosDoJogador for menor que 21 ou
        pontosdaIA > 21 e os pontosDoJogador forem menor que 21,
        imprimir o usuário ganhou
       
       */
      if(((pontosDoJogador > pontosdaIA) && pontosDoJogador <= 21) || (pontosdaIA > 21 && pontosDoJogador < 21)){
         console.log("O usuário ganhou!");
      }
       
        /*  
       
        Se pontosdaIA > pontosdaJogador e os pontosdaIa for menor ou igual a 21 ou
        pontosDoJogador > 21 e os pontosdaIA forem menor que 21,
        imprimir o Computador ganhou
       
       */
       
      else if(((pontosdaIA > pontosDoJogador) && pontosdaIA <= 21) || (pontosDoJogador > 21 && pontosdaIA < 21)){
         console.log("O computador ganhou!")
      }
       
      /*  
       
        E no else, se houver empate imprimir empate!
       
       */
       
      else{
         console.log("Empate!")
      }

   }
   else{
       /*  
       
        Se o usuário clicar em carcelar irá imprimir o jogo acabou.
       
       */
      console.log("O jogo acabou");
   }
