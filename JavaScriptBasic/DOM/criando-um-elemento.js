/**
 
Como criar um elemento novo na tela:
Um elemento pode ser criado passando as seguintes intruções mudando somente o seu seletor;


**/


// criando um nvo elemento (div,h1,h3 ou qualquer outro);
const novaDiv = document.createElement('div');
// cria o texto ou conteudo que sera adicionado a div;
novaDiv.textContent = 'Conteudo da nova div';
// adicionara a diva ao corpo da pagina.
document.body.appendChild(novaDiv);
console.log(novaDiv);