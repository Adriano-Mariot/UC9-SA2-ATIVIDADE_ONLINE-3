
$(document).ready (function (){

    inicio();
    
    $('#sign').click (function(){
        let email = $("#email").val();
        let senha = $("#senha").val();

        console.log (validarLogin (email, senha));

        if(validarLogin(email, senha)){
            alert("Preenchido corretamente");
        }else{
            alert("Preencher todos os campos");
           }
    });

    $('#cadButton').click (function(){
        alert("Iniciar Pagina de Cadastro");
    });

    $('#passwordTextItem2').click (function(){
        alert("Enviar e-mail para cadastrar nova senha");
    });

    function validarLogin (e, s){
        if(e !=="" && s !=""){
            return true; //avisa que não está tudo preenchido
        }else{
            return false; //está tudo preenchido
        }
    }
    
    function inicio () {
        alert("Pagina de Login do Site Game Mania");
    }
});
