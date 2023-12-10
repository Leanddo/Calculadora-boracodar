const display = document.getElementById("visor-valor");
const display_conta = document.getElementById("visor-conta");

function aparecedisplay(input) {
  display.value += input;
}

function limparDisplay() {
  display.value = "";
  display_conta.value = "";
}

function Apagar(){
    let inputText = display.value;
    display.value = inputText.substring(0,inputText.length-1);
}

function Calcular(){
    try{
        display_conta.value=display.value;
        display.value=eval(display.value);
    }catch(error){
        display.value="Erro";
    }
}
function maisoumenos(){
    let alternador=false;

    alternador=!alternador;
    if(alternador==true){
        display.value=-display.value;
    }else{
        display.value=+display.value;
    }

}

