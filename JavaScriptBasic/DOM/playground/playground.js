
//acessando e modificando um elemento no HTML;
const singleElemet = document.querySelector('.header').innerHTML = 'This is a new Title';


const multipleElments = document.querySelectorAll('li');
// Percorrendo varios elemento de um DOM e alterando os seu textos;
const multiplosElementos = multipleElments.forEach((elementos) => {
    elementos.innerHTML = 'texto substituido.'
})


// criando um nvo elemento (div,h1,h3 ou qualquer outro);
const novaDiv = document.createElement('div');
// cria o texto ou conteudo que sera adicionado a div;
novaDiv.textContent = 'Conteudo da nova div';
// adicionara a diva ao corpo da pagina.
document.body.appendChild(novaDiv);
console.log(novaDiv);

const newElement = document.createElement('p');

function inserir() {
    const newElement = document.createElement('p');
    newElement.classList.add('new-item')
    newElement.textContent = 'Elemento adicionado pelo botão!'
    return document.body.appendChild(newElement)
}

function excluir() {
    const excluirElemento = document.querySelector('.new-item');
    if (excluirElemento) {
        return excluirElemento.remove();
    }
}
// <!-- 1. 
//     A Transformação (De texto para campo de digitação)
//     Um parágrafo (<p>) é um texto estático, o usuário não consegue clicar e digitar dentro dele por padrão.
//     Quando o usuário clica em "Editar", o que precisa acontecer com esse <p>?

// Assim que o <p> for clidado teria que abrir um input com uma mensagem nova texto.

//     Dica: Pense nas tags de formulário do HTML.
//     Por qual tag você precisaria substituir o <p> (ou colocar no lugar dele) para que o texto
//     possa ser digitado? 
// --></p>
document.addEventListener('click', function (e) {

    // Faz um tratamento para que elemento seja capturado quando aparecer na pagina;
    if (e.target.classList.contains('new-item')) {

        // captura o elemento com a classe;
        const editElemento = e.target;

        // cria uma variavel que gera o input;
        const input = document.createElement('input');

        // Tipa o input;
        input.type = 'text'

        // O valor do input é sobreposto no valor do editElement.innerText que é um texto;
        input.value = editElemento.innerText;

        // Substituiu o elemento texto pelo input;
        editElemento.replaceWith(input);

    }


})




console.log(singleElemet)
console.log(multiplosElementos)