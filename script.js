'use strict'; // Modo estrito para evitar erros comuns e melhorar a segurança

// Array contendo objetos com ID e URL das imagens
const images = [
    { 'id': '1', 'url':'./img/m.jpg' },
    { 'id': '2', 'url':'./img/c.jpg' },
    { 'id': '3', 'url':'./img/l.jpg' },
    { 'id': '4', 'url':'./img/s.jpg' },
    { 'id': '5', 'url':'./img/co.jpg' },
    { 'id': '6', 'url':'./img/t.jpg' },
];

// Seleciona o container onde as imagens vão ser inseridas
const container = document.querySelector('#container-items');

// Função que carrega as imagens no container
const loadImages = (images, container) => {
    images.forEach(image => {
        // Adiciona um  div com a classe 'item' e uma imagem dentro
        container.innerHTML += `
            <div class='item'>
                <img src='${image.url}' />
            </div>
        `;
    });
}

// Chama a função para carregar as imagens no container
loadImages(images, container);

// Captura todos os elementos que possuem a classe 'item' (as imagens dentro do container)
let items = document.querySelectorAll('.item');

// Função que move a primeira imagem para o final (fazendo o carrossel girar para trás)
const previous = () => {
    container.appendChild(items[0]); // Move o primeiro item para o final do container
    items = document.querySelectorAll('.item'); // Atualiza a lista de itens após a mudança
}

// Função que move a última imagem para o início (fazendo o carrossel girar para frente)
const next = () => {
    const lastItem = items[items.length - 1]; // Captura o último item da lista
    container.insertBefore(lastItem, items[0]); // Insere o último item antes do primeiro
    items = document.querySelectorAll('.item');
}

// Adiciona um evento de clique ao botão de navegação anterior
document.querySelector('#previous').addEventListener('click', previous);

// Adiciona um evento de clique ao botão de navegação próximo
document.querySelector('#next').addEventListener('click', next);
