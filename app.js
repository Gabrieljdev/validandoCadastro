let botaoLogin = document.getElementById('botao_login');
let botaoCadastro = document.getElementById('botao_cadastro');
let botaoEnviar = document.getElementById('botao_enviar');


// Verifique se os botões de login e cadastro existem antes de adicionar os event listeners
if (botaoLogin) {
    botaoLogin.addEventListener('click', () => {
        window.location.href = 'index.html'; // Redireciona para index.html
    });
}

if (botaoCadastro) {
    botaoCadastro.addEventListener('click', () => {
        window.location.href = 'cadastrar.html'; // Redireciona para cadastrar.html
    });
}
botaoEnviar.addEventListener('click', () => {
    // Obter os valores dos campos do formulário
    let nome = document.getElementById('nome').value;
    let idade = document.getElementById('idade').value;
    let genero = document.getElementById('genero').value;
    let bio = document.getElementById('bio').value;

    // Verificar se os campos obrigatórios estão preenchidos
    if (!nome || !idade || !genero || !bio) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return; // Interrompe a execução se algum campo estiver vazio
    }

    // Verificar se a idade está dentro do intervalo permitido
    if (idade < 18 || idade > 100) {
        alert("A idade deve estar entre 18 e 100 anos.");
        return; // Interrompe a execução se a idade não for válida
    }

    // Armazenar o nome no localStorage
    localStorage.setItem('nome', nome);

    // Redirecionar para index.html
    window.location.href = 'index.html';
});

