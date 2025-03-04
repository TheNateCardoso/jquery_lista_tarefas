$(document).ready(function() {
    // Evento de submit do formulário
    $('#form-tarefa').on('submit', function(e) {
        e.preventDefault(); // Impede o recarregamento da página

        // Captura o valor do campo de texto
        const nomeTarefa = $('#nome-tarefa').val();

        // Verifica se o campo não está vazio
        if (nomeTarefa.trim() === "") {
            alert("Por favor, insira uma tarefa válida.");
            return;
        }

        // Cria um novo item da lista
        const novoItem = $('<li></li>').text(nomeTarefa);

        // Adiciona o item à lista
        $('#lista-tarefas').append(novoItem);

        // Limpa o campo de texto
        $('#nome-tarefa').val('');
    });

    // Evento de clique no botão "Cancelar"
    $('#botao-cancel').click(function() {
        $('#nome-tarefa').val(''); // Limpa o campo de texto
    });

    // Evento de clique nos itens da lista
    $('#lista-tarefas').on('click', 'li', function() {
        $(this).toggleClass('completo'); // Alterna a classe "completo"
    });
});