$(document).ready(function() {
    // Controle do Formulário
    $('#botao-new').click(function() {
        $('form').slideDown(400);
        $('#nome-tarefa').focus();
    });

    $('#botao-cancel').click(function() {
        $('form').slideUp(400);
        $('#nome-tarefa').val('');
    });

    // Adição de Tarefas
    $('#form-tarefa').submit(function(e) {
        e.preventDefault();
        const tarefa = $('#nome-tarefa').val().trim();
        
        if (!tarefa) {
            alert('Digite uma tarefa válida');
            return;
        }

        const novoItem = $('<li>')
            .text(tarefa)
            .hide()
            .appendTo('#lista-tarefas')
            .slideDown(400);

        $('#nome-tarefa').val('');
    });

    // Marcar Tarefas
    $('#lista-tarefas').on('click', 'li', function() {
        $(this).toggleClass('completo');
    });
});
