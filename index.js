//Declaramos variables
var operandoa;
var operandob;
var operacion;
function init(){
    //variables
    var resultado = document.getElementById('resultado');
    var reset = document.getElementById('reset');
    var suma = document.getElementById('suma');
    var resta = document.getElementById('resta');
    var multiplicacion = document.getElementById('multiplicacion');
    var division = document.getElementById('division');
    var igual = document.getElementById('igual');
    var uno = document.getElementById('uno');
    var dos = document.getElementById('dos');
    var tres = document.getElementById('tres');
    var cuatro = document.getElementById('cuatro');
    var cinco = document.getElementById('cinco');
    var seis = document.getElementById('seis');
    var siete = document.getElementById('siete');
    var ocho = document.getElementById('ocho');
    var nueve = document.getElementById('nueve');
    var cero = document.getElementById('cero');
}
//Eventos de click
uno.onclick = function(e){
    resultado.textContent = resultado.textContent  + "1";
}
dos.onclick = function(e){
    resultado.textContent = resultado.textContent  + "2";
}
tres.onclick = function(e){
    resultado.textContent = resultado.textContent  + "3";
}
cuatro.onclick = function(e){
    resultado.textContent = resultado.textContent  + "4";
}
cinco.onclick = function(e){
    resultado.textContent = resultado.textContent  + "5";
}
seis.onclick = function(e){
    resultado.textContent = resultado.textContent  + "6";
}
siete.onclick = function(e){
    resultado.textContent = resultado.textContent  + "7";
}
ocho.onclick = function(e){
    resultado.textContent = resultado.textContent  + "8";
}
nueve.onclick = function(e){
    resultado.textContent = resultado.textContent  + "9";
}
cero.onclick = function(e){
    resultado.textContent = resultado.textContent  + "0";
}
reset.onclick = function(e){
    resetear();
}
suma.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "+";
    limpiar();
}
resta.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "-";
    limpiar();
}
multiplicacion.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "*";
    limpiar();
}
division.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "/";
    limpiar();
}
igual.onclick = function(e){
    operandob = resultado.textContent;
    resolver();
}
function limpiar(){
    resultado.textContent = "";
}

function resetear(){
    resultado.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
}
function resolver(){
    var res = 0;
    switch(operacion){
    case "+":
        res = parseFloat(operandoa) + parseFloat(operandob);
        break;
    case "-":
        res = parseFloat(operandoa) - parseFloat(operandob);
        break;
    case "*":
        res = parseFloat(operandoa) * parseFloat(operandob);
        break;
    case "/":
        res = parseFloat(operandoa) / parseFloat(operandob);
        break;
    }
    resetear();
    resultado.textContent = res;
}

/*      MODO NOCHE      */
/* const bnoche = document.querySelector('.bnoche')
const calculadora = document.querySelector('.calculadora');
const button = document.querySelector ('button');
const td = document.querySelector ('td');
const ocho = document.querySelector ('.ocho');
bnoche.addEventListener('click', () =>{
    calculadora.classList.toggle('modonoche');
    button.classList.toggle('modonoche');
    td.classList.toggle('modonoche');
    ocho.classList.toggle('modonoche');
});
 */
document.querySelector('.bnoche').addEventListener('click', function(){
    document.querySelector('.calculadora').classList.toggle('modonoche');
    document.querySelector('.bnoche').classList.toggle('modonoche');
    document.querySelector('#siete').classList.toggle('modonoche');
    document.querySelector('#ocho').classList.toggle('modonoche');
    document.querySelector('#nueve').classList.toggle('modonoche');
    document.querySelector('#division').classList.toggle('modonoche');
    document.querySelector('#cuatro').classList.toggle('modonoche');
    document.querySelector('#cinco').classList.toggle('modonoche');
    document.querySelector('#seis').classList.toggle('modonoche');
    document.querySelector('#multiplicacion').classList.toggle('modonoche');
    document.querySelector('#uno').classList.toggle('modonoche');
    document.querySelector('#dos').classList.toggle('modonoche');
    document.querySelector('#tres').classList.toggle('modonoche');
    document.querySelector('#resta').classList.toggle('modonoche');
    document.querySelector('#igual').classList.toggle('modonoche');
    document.querySelector('#reset').classList.toggle('modonoche');
    document.querySelector('#cero').classList.toggle('modonoche');
    document.querySelector('#suma').classList.toggle('modonoche');
    document.querySelector('#resultado').classList.toggle('modonoche');
})