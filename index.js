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

/* Dentro de esta parte del código la variables previamente creadas y llamadas desde el HTML
por el id (Líneas 7-23) se ejecutan de acuerdo a la función específica de cada botón.

---------------------------------------------------------------------

Vemos el número seleccionado en la pantalla de resultado al hacer clic sobre los botones numéricos */

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

/* Se elimina el resultado de la operación o los díjitos seleccionados anteriormente */
reset.onclick = function(e){
    resetear();
}

/* Se asignará operación que deseemos realizar de a cuerdo al botón de operación (suma, resta, multiplicación, division) */
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

/* Se mostrará el resultado de la operación realizada */
igual.onclick = function(e){
    operandob = resultado.textContent;
    //Ejecutará la operación con ka función resolver()
    resolver();
}

/* Elimina lo que se muestre en pantalla reemplazandolo por un texto vacío */
function limpiar(){
    resultado.textContent = "";
}

/* Deja la calculadora en 0 */
function resetear(){
    resultado.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
}

/* De aceurdo a la operación hecha en la calculadora evalúa los diferentes casos para que esta se resuelva */
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
    //Dela la operación en 0
    resetear();
    
    //Muestra el resultado en la pantalla de resultado
    resultado.textContent = res;
}


/*      MODO NOCHE      */

/* Primer intendo de desarrollo en el modo noche, reemplazado por la segunda forma que encontramos
en las líneas 162-183 */

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

//Evento para crear el moo noche

//document.querySelector devuelve el elemento que se le idique dentro de los paréntesis

/* addEventListener indica al navegador de la acción a realizar del usuario, con un 'click' y
la función a ejecutar con los eventos que se encuentren dentro de las llaves. */

document.querySelector('.bnoche').addEventListener('click', function(){
    //classList.toggle añade la clase de .modonoche a las querySelector de su línea 
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

/* Se realizó de forma específica con cada uno de los id de la calculadora ya que cuando
se intentaba realizar de forma general (por ejemplo con "button") no aplicaba los estilos de la clase
.modonoche */