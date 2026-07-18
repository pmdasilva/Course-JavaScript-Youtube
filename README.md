# Course-JavaScript-Youtube

Este é uma sessão onde vou estar adicionando anotações e projetos que forem reçevantes no momento do estudo.


1. A Transformação (De texto para campo de digitação)
Um parágrafo (<p>) é um texto estático, o usuário não consegue clicar e digitar dentro dele por padrão. Quando o usuário clica em "Editar", o que precisa acontecer com esse <p>?
Dica: Pense nas tags de formulário do HTML. Por qual tag você precisaria substituir o <p> (ou colocar no lugar dele) para que o texto possa ser digitado?

2. Dança das Cadeiras (O texto original)
Quando o campo de digitação aparecer na tela, ele não pode aparecer vazio, certo? Ele precisa já vir preenchido com o texto antigo que o usuário quer alterar. Como você pega o texto que estava dentro do <p> e injeta dentro desse novo campo de digitação logo que ele é criado?

3. O Botão Salvar (Trocando a ação)
Quando o usuário entra no "Modo de Edição", o botão "Editar" não faz mais sentido. Você precisará de um botão "Salvar". Você pode fazer isso de duas formas:

Esconder o botão "Editar" e mostrar um botão "Salvar" que estava oculto.

Mudar o texto e a função do próprio botão que já foi clicado.
Qual caminho parece mais fácil para você implementar com o que já sabe?

4. A Captura e o Retorno (Salvando de fato)
O usuário digitou o texto novo e clicou em "Salvar". Agora vem a mágica final:

Qual propriedade do JavaScript usamos para pegar o valor que foi digitado dentro de um <input> ou <textarea>? (Atenção: não é a mesma propriedade que usamos para pegar o texto de um <p>).

Depois de pegar esse texto novo, como fazemos para a tela "voltar ao normal"? Ou seja, como removemos o campo de digitação e colocamos o <p> de volta, mas agora com a frase atualizada?

Tente rascunhar como seria o código (ou pelo menos a lógica no papel) para esse botão "Editar". Comece pelo passo 1: como transformar o <p> que você já seleciona com o querySelector em um campo editável?