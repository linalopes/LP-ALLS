//Validação simples
$("#user-info-form").validate({
    debug:true,
    rules: {
        name: {
            required: true,
        },

        email: {
            required: true,
            email: true,
        },
        cep: {
            required: true,
        },
        city: {
            required: true,
        },
        uf: {
            required: true,
        },
        address: {
            required: true,
        },
        cpf: {
            required: true,
            cpf: true,
        },
        aceites: {
            required: true,
            minlength: 2,
        },
    },

    messages: {
        name: {
            required:"Por favor, informe seu nome",
            minlength:"O nome deve ter pelo menos 3 caracteres",
        },
        email: {
            required:"É necessário informar um e-mail",
            email: "Informe um e-mail válido",
        },
        address: {
            required:"Por favor, informe seu endereço",
            minlength:"Endereço com nome de rua e número",
        },
        aceites: {
            required: "Necessário aceitar os termos e a política antes de prosseguir",
            minlength:"Necessário aceitar os termos e a política antes de prosseguir",
        },
    },
});

//Validação para CPF

jQuery.validator.addMethod("cpf", function(value, element) {
    value = jQuery.trim(value);

    value = value.replace('.','');
    value = value.replace('.','');
    cpf = value.replace('-','');
    while(cpf.length < 11) cpf = "0"+ cpf;
    var expReg = /^0+$|^1+$|^2+$|^3+$|^4+$|^5+$|^6+$|^7+$|^8+$|^9+$/;
    var a = [];
    var b = new Number;
    var c = 11;
    for (i=0; i<11; i++){
        a[i] = cpf.charAt(i);
        if (i < 9) b += (a[i] * --c);
    }
    if ((x = b % 11) < 2) { a[9] = 0 } else { a[9] = 11-x }
    b = 0;
    c = 11;
    for (y=0; y<10; y++) b += (a[y] * c--);
    if ((x = b % 11) < 2) { a[10] = 0; } else { a[10] = 11-x; }

    var retorno = true;
    if ((cpf.charAt(9) != a[9]) || (cpf.charAt(10) != a[10]) || cpf.match(expReg)) retorno = false;

    return this.optional(element) || retorno;

}, "Informe um CPF válido");



//Máscaras para CEP e CPF

jQuery(function($){
   $("#cep-input").mask("99999-999");
   $("#cpf-input").mask("999.999.999-99");
});


$(document).ready(function() {

            function limpa_formulário_cep() {
                // Limpa valores do formulário de cep.
                $("#rua").val("");
                $("#bairro").val("");
                $("#cidade").val("");
                $("#uf").val("");
                $("#ibge").val("");
            }
            
            //Quando o campo cep perde o foco.
            $("#cep-input").blur(function() {

                //Nova variável "cep" somente com dígitos.
                var cep = $(this).val().replace(/\D/g, '');

                //Verifica se campo cep possui valor informado.
                if (cep != "") {

                    //Expressão regular para validar o CEP.
                    var validacep = /^[0-9]{8}$/;

                    //Valida o formato do CEP.
                    if(validacep.test(cep)) {

                        //Preenche os campos com "..." enquanto consulta webservice.
                        $("#address-input").val("...");
                        $("#city-input").val("...");
                        $("#uf-input").val("...");

                        //Consulta o webservice viacep.com.br/
                        $.getJSON("https://viacep.com.br/ws/"+ cep +"/json/?callback=?", function(dados) {

                            if (!("erro" in dados)) {
                                //Atualiza os campos com os valores da consulta.
                                $("#address-input").val(dados.logradouro);
                                $("#city-input").val(dados.localidade);
                                $("#uf-input").val(dados.uf);
                            } //end if.
                            else {
                                //CEP pesquisado não foi encontrado.
                                limpa_formulário_cep();
                                alert("CEP não encontrado.");
                            }
                        });
                    } //end if.
                    else {
                        //cep é inválido.
                        limpa_formulário_cep();
                        alert("Formato de CEP inválido.");
                    }
                } //end if.
                else {
                    //cep sem valor, limpa formulário.
                    limpa_formulário_cep();
                }
            });
        });