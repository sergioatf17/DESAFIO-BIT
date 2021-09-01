function init(){
    var resultado = document.getElementById("resultado");
    var resultado1 = document.getElementById("resultado1");
    var reset = document.getElementById('reset');
    var uno = document.getElementById('uno');
    var dos = document.getElementById('dos');
    var tres = document.getElementById('tres');
    var cuatro = document.getElementById('cuatro');
    var cinco = document.getElementById('cinco');
    var seis = document.getElementById('seis');
    var siete = document.getElementById('siete');
    var nueve = document.getElementById('nueve');
    var letraa = document.getElementById('letraa');
    var letrab = document.getElementById('letrab');
    var letrac = document.getElementById('letrac');
    var letrad = document.getElementById('letrad');
    var letrae = document.getElementById('letrae');
    var letraf = document.getElementById('letraf');
    var letrag = document.getElementById('letrag');
    var letrah = document.getElementById('letrah');
     
    var arrayNumbers = ["1","2","3","4","5","6","7","8","9"];
    var arrayLetters = ["A","B","C","D","E","F","G","H","I"];
    var primerValorTexto = "A";
    var primerValorNumerico = "1" ;
    

    uno.onclick = function(e){
        
        var validarEntrada =  validator(arrayNumbers,resultado.textContent, "1", primerValorNumerico);
        
        if (validarEntrada == true) {
            resultado.textContent = resultado.textContent + '1,';
        }else{
            window.alert("No es el numero que sigue");
        }
    }
    dos.onclick = function (e){

        var validarEntrada =  validator(arrayNumbers,resultado.textContent, "2", primerValorNumerico);
        
        if (validarEntrada == true) {
            resultado.textContent = resultado.textContent + '2,';
        }else{
            window.alert("No es el primer numero ");
        }
    }
    tres.onclick = function (e){
        var validarEntrada =  validator(arrayNumbers,resultado.textContent, "3", primerValorNumerico);
        
        if (validarEntrada == true) {
            resultado.textContent = resultado.textContent + '3,';
        }else{
            window.alert("Por favor ingrese numeros en orden");
        }
    }
    cuatro.onclick = function (e){
        var validarEntrada =  validator(arrayNumbers,resultado.textContent, "4", primerValorNumerico);
        
        if (validarEntrada == true) {
            resultado.textContent = resultado.textContent + '4,';
        }else{
            window.alert("Por favor ingrese numeros en orden");
        }
    }
    cinco.onclick = function (e){
        var validarEntrada =  validator(arrayNumbers,resultado.textContent, "5", primerValorNumerico);
        
        if (validarEntrada == true) {
            resultado.textContent = resultado.textContent + '5,';
        }else{
            window.alert("Por favor ingrese numeros en orden");
        }
    }
    seis.onclick = function (e){
        var validarEntrada =  validator(arrayNumbers,resultado.textContent, "6", primerValorNumerico);
        
        if (validarEntrada == true) {
            resultado.textContent = resultado.textContent + '6,';
        }else{
            window.alert("Por favor ingrese numeros en orden");
        }
    }
    siete.onclick = function (e){
        var validarEntrada =  validator(arrayNumbers,resultado.textContent, "7", primerValorNumerico);
        
        if (validarEntrada == true) {
            resultado.textContent = resultado.textContent + '7,';
        }else{
            window.alert("Por favor ingrese numeros en orden");
        }
    }
    ocho.onclick = function (e){
        var validarEntrada =  validator(arrayNumbers,resultado.textContent, "8", primerValorNumerico);
        
        if (validarEntrada == true) {
            resultado.textContent = resultado.textContent + '8,';
        }else{
            window.alert("Por favor ingrese numeros en orden");
        }
    }
    nueve.onclick = function (e){
        var validarEntrada =  validator(arrayNumbers,resultado.textContent, "9", primerValorNumerico);
        
        if (validarEntrada == true) {
            resultado.textContent = resultado.textContent + '9,';
        }else{
            window.alert("Por favor ingrese numeros en orden");
        }
    }
    
    letraa.onclick = function(e){
        var validarEntrada =  validator(arrayLetters,resultado1.textContent, "A", primerValorTexto);
        
        if (validarEntrada == true) {
            resultado1.textContent = resultado1.textContent + 'A,';
        }else{
            window.alert("Por favor ingrese letras en orden alfabetico");
        }
    }
    letrab.onclick = function (e){
        var validarEntrada =  validator(arrayLetters,resultado1.textContent, "B", primerValorTexto);
        
        if (validarEntrada == true) {
            resultado1.textContent = resultado1.textContent + 'B,';
        }else{
            window.alert("No es la primer letra");
        }
    }
    letrac.onclick = function (e){
        var validarEntrada =  validator(arrayLetters,resultado1.textContent, "C", primerValorTexto);
        
        if (validarEntrada == true) {
            resultado1.textContent = resultado1.textContent + 'C,';
        }else{
            window.alert("Por favor ingrese letras en orden alfabetico");
        }
    }
    letrad.onclick = function (e){
        var validarEntrada =  validator(arrayLetters,resultado1.textContent, "D", primerValorTexto);
        
        if (validarEntrada == true) {
            resultado1.textContent = resultado1.textContent + 'D,';
        }else{
            window.alert("Por favor ingrese letras en orden alfabetico");
        }
    }
    letrae.onclick = function (e){
        var validarEntrada =  validator(arrayLetters,resultado1.textContent, "E", primerValorTexto);
        
        if (validarEntrada == true) {
            resultado1.textContent = resultado1.textContent + 'E,';
        }else{
            window.alert("Por favor ingrese letras en orden alfabetico");
        }
    }
    letraf.onclick = function (e){
        var validarEntrada =  validator(arrayLetters,resultado1.textContent, "F", primerValorTexto);
        
        if (validarEntrada == true) {
            resultado1.textContent = resultado1.textContent + 'F,';
        }else{
            window.alert("Por favor ingrese letras en orden alfabetico");
        }
    }
    letrag.onclick = function (e){
        var validarEntrada =  validator(arrayLetters,resultado1.textContent, "G", primerValorTexto);
        
        if (validarEntrada == true) {
            resultado1.textContent = resultado1.textContent + 'G,';
        }else{
            window.alert("Por favor ingrese letras en orden alfabetico");
        }
    }
    letrah.onclick = function (e){
        var validarEntrada =  validator(arrayLetters,resultado1.textContent, "H", primerValorTexto);
        
        if (validarEntrada == true) {
            resultado1.textContent = resultado1.textContent + 'H,';
        }else{
            window.alert("Por favor ingrese letras en orden alfabetico");
        }
    }
    letrai.onclick = function (e){
        var validarEntrada =  validator(arrayLetters,resultado1.textContent, "I", primerValorTexto);
        
        if (validarEntrada == true) {
            resultado1.textContent = resultado1.textContent + 'I,';
        }else{
            window.alert("Por favor ingrese letras en orden alfabetico");
        }
    }  
   


    function validator(arrayGeneric, textString, textButton, primerValor) {
        
        if (textString == "") {
            if(textButton == primerValor){
                return true;
            }
            else{
                return false;
            }
        }
        else
        {
            var arrayentry = textString.split(",");
            var finalentry = arrayentry[arrayentry.length-2]

            numberposicion = arrayGeneric.indexOf(finalentry);

            if (arrayGeneric[numberposicion + 1] == textButton ) {
                return true;
            }
            else{
                return false;
            }
        }

    }

    reset.onclick = function (e) {
        resetear ();
    }

}

function resetear() {
    resultado.textContent = "";
    resultado1.textContent = "";
    
}