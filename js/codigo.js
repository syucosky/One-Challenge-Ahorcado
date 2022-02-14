
// LLAMANDO A CANVAS
var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");



// FUNCIONES 
function escenario(){
    pincel.fillStyle= "black";
    pincel.fillRect(10,380,780,10);
}
function tarimaHorca(){
    // LADO IZQ
        pincel.fillStyle= "black";
        pincel.fillRect(20,310,8,70);
    // LADO DERECHO
        pincel.fillStyle= "black";
        pincel.fillRect(150,310,8,70);
    // PISO
        pincel.fillStyle= "black";
        pincel.fillRect(20,310,130,8);

}
function horca(){
    // POSTE 
        pincel.fillStyle= "black";
        pincel.fillRect(60,160,6,150);
    //  TECHO
        pincel.fillStyle= "black";
        pincel.fillRect(40,180,100,6);
    // CUERDA
        pincel.fillStyle= "orange";
        pincel.fillRect(100,180,4,50);
    
}
function cabeza(){
    // CABEZA
    pincel.beginPath();
    pincel.fillStyle = "black";
    pincel.arc(100,235,12,0,2*3.14);
    pincel.fill();
}
function torso(){

    // CUERPO
    pincel.fillStyle= "black";
    pincel.fillRect(98,240,4,40);    
}
function piernaIzq(){
    
    // PIERNA IZQ
    pincel.beginPath();
    pincel.moveTo(100, 280);
    pincel.lineTo(85, 300); 
    pincel.strokeStyle = "black";
    pincel.lineWidth = 2;
    pincel.stroke();
    pincel.fill();
}
function piernaDer(){
    // PIERZA DER
    pincel.beginPath();
    pincel.moveTo(100, 280);
    pincel.lineTo(115, 300);
    pincel.strokeStyle = "black";
    pincel.lineWidth = 2;
    pincel.stroke();
    pincel.fill();
}
function brazoDer(){

    // BRAZO DER
    pincel.beginPath();
    pincel.moveTo(100, 250);
    pincel.lineTo(115, 260);
    pincel.strokeStyle = "BLACK";
    pincel.lineWidth = 2;
    pincel.stroke();
    pincel.fill();
}
function brazoIzq(){

    // BRAZO IZQ
    pincel.beginPath();
    pincel.moveTo(100, 250);
    pincel.lineTo(85, 260);
    pincel.strokeStyle = "black";
    pincel.lineWidth = 2;
    pincel.stroke();
    pincel.fill();
}
function crearGuionesDePalabraCorrecta(cant){
    pincel.font = "60px Serif";
    pincel.fillStyle = "green";
        var x = 190;
        var suma = 40;
        for(var i = 0; i < cant; i++){
            pincel.fillText("_",x,360);
            x = suma + x;
        }
}
function crearGuionesDePalabraIncorrecta(cant){
    pincel.font = "60px Serif";
    pincel.fillStyle = "red";
        var x = 190;
        var suma = 40;
        for(var i = 0; i < cant; i++){
            pincel.fillText("_",x,450);
            x = suma + x;
        }
}
function errores(cant){
    pincel.font = "60px Serif";
    pincel.fillStyle = "red";
        var x = 190;
        var suma = 40;
        for(var i = 0; i < cant; i++){
            pincel.fillText("_",x,560);
            x = suma + x;
        }
}
function palabraAleatoria(){
    var i = Math.round(Math.random()*listaPalabras.length - 1);
    return listaPalabras[i];
    
}
function vaulDePos(tamano,array){
    var x = 190;
    for (var i = 0; i < tamano; i++){
        array[i] = x
        x = 40 + x;
    }
    return array;
}
/*tarimaHorca();
escenario();
horca();
cabeza();
torso();
piernaIzq();
piernaDer();
brazoIzq();
brazoDer();
crearPalabra(11);
errores(11);
palabraAleatoria();*/