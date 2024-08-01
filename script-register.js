function criar() {
    var nome = document.getElementById('fullName').value
    var email = document.getElementById('email').value
    var senha = document.getElementById('password').value

    localStorage.setItem('nome', nome)
    localStorage.setItem('email', email)
    localStorage.setItem('senha', senha)

    window.location.href = 'index.html'
}
