document.addEventListener('DOMContentLoaded', function() {
    let imagens = ['./img/imagem1.jpg', './img/imagem2.jpg', './img/imagem4.jpg'];
    let index = 0;
    let time = 3000;

    function slideShow() {
        document.getElementById("imgbanner").src = imagens[index];
        index = (index + 1) % imagens.length;
        setTimeout(slideShow, time);
    }
    slideShow();

    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === 'admin' && password === 'admin123') {
            alert('Login bem-sucedido!');
        } else {
            alert('Nome de usuário ou senha incorretos.');
        }
    });

    alert("Bem-vindo ao site da Mahindra! Aqui você encontrará todas as informações sobre nossos produtos e serviços. Faça login para acessar conteúdos exclusivos.");
});