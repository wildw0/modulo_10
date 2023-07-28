$(document).ready(function () {

    $('#cep').mask('00000-000', {
        placeholder: '00000-000'})    
    
    $('#cpf').mask('000.000.000-00', {
        placeholder: '000.000.000-00'})

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true,
            },
            endereco: {
                required: true
            },
            cep:{
                required: true,
            },
            cpf: {
                required: true,
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome'
        },
        submitHandler: function (form) {
            e.preventDefault();
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Por favor informe todas os dados necessários`)
            }
        }
    })
})
