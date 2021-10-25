function insert(num){
    var numero = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = numero + num;

}

function deletar(){
    document.getElementById("display").innerHTML = "";
    
}

function calcular(){
    var resultado = document.getElementById('display').innerHTML;
    if(resultado){
        document.getElementById('display').innerHTML = eval(resultado);
        //eval = O argumento da função eval() é uma string. Se a string representa uma expressão, eval() avalia a expressão.
    }
    else{
        document.getElementById('display').innerHTML = "Digite!"
    }
}