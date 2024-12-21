function validarEmail(email) {
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regexEmail.test(email);
}

// Função para validar a senha (mínimo de 8 caracteres)
function validarSenha(senha) {
    const regexSenha = /^.{8,}$/; // Verifica se tem pelo menos 8 caracteres
    return regexSenha.test(senha);
}

// Função para validar o formulário
function validarFormulario(event) {
    // Impede o envio do formulário
    event.preventDefault();

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    // Validações
    if (!validarEmail(email)) {
        
        return alert("Email inválido. Por favor, insira um email válido.");
    }

    if (!validarSenha(senha)) {
       
        return  alert("Senha inválida. A senha deve ter pelo menos 8 caracteres.");
    }

   return alert("Login realizado com sucesso!");

}