function logar() {
    var emailUsuario = localStorage.getItem('email')
    var senhaUsuario = localStorage.getItem('senha')

    var emailInserido = document.querySelector('.username').value
    var senhaInserida = document.querySelector('.password').value

    if (emailInserido === emailUsuario && senhaInserida === senhaUsuario) {
        alert('Estamos te redirecionando para sua página de login, aguarde.');
        window.location.href = 'homepage.html'
    } else {
        alert('Email ou senha incorretos. Tente novamente.');
    }
}
