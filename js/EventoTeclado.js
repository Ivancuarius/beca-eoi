(function() {
    var caja = document.getElementById("cajaTexto");
    document.addEventListener("keypress",function(evt){

        var ascii = evt.charCode;

        if(ascii >= 65 && ascii <=90){

        }else{
            evt.preventDefault();
        }
    },false);
}());