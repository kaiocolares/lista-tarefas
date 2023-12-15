$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();

        const nomeTarefa = $('#nome-tarefa').val();
        const novoItem = $('<li></li>').text(nomeTarefa);

        $('ul').append(novoItem);
        $('#nome-tarefa').val('');
    })
    $('ul').on('click', 'li', function() {
        $(this).toggleClass('selected');
    })
})