function entrar(event) {
    event.preventDefault(); // impede o envio automático do formulário
    
    const nome = document.getElementById('nomeUsuario').value.trim(); // Remove espaços em branco
    const senha = document.getElementById('senhaUsuario').value.trim();

    if (nome === "ErikGames" && senha == "erik1234" ||
        nome === "CarlosLindo" && senha == "carlinhos123") {
        window.location.href = '/assets/pages/inicio.html';
    } else {
        window.alert("Usuário ou senha inválido(os)!");
    }
}