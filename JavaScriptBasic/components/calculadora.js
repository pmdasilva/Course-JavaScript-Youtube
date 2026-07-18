let calculation =  "";

function numero(numero){
    console.log(calculation += numero);
}

function somar(){
    calculation += "+";
    console.log(calculation);
}   

function igual(){
    console.log(eval(calculation));
    
}
    
    
function limpar(){
    calculation = "";
    console.log("Limpou");
}