// Criando as variaveis do JS
let menu = document.querySelector('#menu');
let header = document.querySelector('.header');
let colors = document.querySelector('#colors');
let selection_colors = document.querySelector('#selection_colors');
// Função de clique para mudar o icone e aparecer o menu
menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}
// Função para ativar e desativar a seleção de cores do tema
colors.onclick = () =>{
    selection_colors.classList.toggle('active');
}
// Função para ao descer de tela sumir o menu
window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}
// Função pra a mudança de cores no seletor
document.querySelectorAll(".color_option").forEach(option => {
    option.style.backgroundColor = option.dataset.color;
    option.addEventListener("click", function() {
        document.documentElement.style.setProperty("--theme", this.dataset.color);
    });
});
// Função para mudança de imagem na galeria
function change_media(src) {
    let main_container = document.getElementById('main_media');
    main_container.innerHTML = `<img src="${src}" alt="">`;
}