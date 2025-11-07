function entrar() {
    const nome = document.getElementById('nomeUsuario').value.trim(); // Remove espaços em branco
    const senha = document.getElementById('senhaUsuario').value.trim();

    if (nome === "ErikGames" && senha == "erik1234") {
        window.location.href = 'principal.html';
    } else {
        window.alert("Usuário ou senha inválido(os)!");
    }
}

function resenhaUltimato() {
    window.location.href = 'ultimato.html';
}