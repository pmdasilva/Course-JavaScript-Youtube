

let conteudoIsActive = false;
const btn = document.querySelector('.toggleBtn');
const conteudo = document.querySelector('.conteudo-header');


// Isto ja deixa o conteudo oculto logo ao iniciar a pagina;
conteudo.classList.add('is-visible')

function toggle(){
    
    //armazena o estado do conteudo de false para ativo;
    conteudoIsActive = !conteudoIsActive

    // se o conteudo for ativo ele vai bostrar o bloco;
    if(conteudoIsActive){
        // conteudo.style.display = 'block';
        conteudo.classList.add('is-visible')
        btn.textContent = 'Ocultar'
    // se o conteudo for oculta ele vai mostrar um display none co o botão mostrar;
    }else{
        // conteudo.style.display = 'none';
        conteudo.classList.remove('is-visible')
        btn.textContent = 'Mostrar'
    }
    
}


const lista = document.querySelectorAll('.lista');

lista.forEach((items) => {
    items.classList.add('lista')
});
