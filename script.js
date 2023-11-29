const botoes = document.querySelectorAll('.button');

botoes.forEach(function(botao) {
    botao.addEventListener('click', function(event) {
        event.preventDefault();

        const digito = botao.value;

        const numero = document.getElementById('resultado').innerHTML;
        document.getElementById('resultado').innerHTML = numero + digito;
    });
});


function clean(){
    document.getElementById('resultado').innerHTML = '';
}



const apagar = document.getElementById('apagar');

apagar.addEventListener('click', function(event){
    event.preventDefault();

    const resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1)
})


function calcular(){
    resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        resultado = document.getElementById('resultado').innerHTML = eval(resultado);
    } else {
        document.getElementById('resultado').innerHTML= '';
    }
}