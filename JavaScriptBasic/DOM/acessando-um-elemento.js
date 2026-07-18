/** 

Como acessar um elemento via JavaScript utilizando DOM.

Podemos acessar via todos os seus atributos passando somente o seu selector;
para validarmos o conteudo temos tambem o innerHTML e o textContext;
Esses mesmo atributos tambem servem para substitir uma informação na tela.

**/

const elementoUnico = document.querySelector('.p-header').textContent;
const novoConteudo = elementoUnico.textContent = 'novo texto';