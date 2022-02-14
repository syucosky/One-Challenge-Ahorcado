var oirTecla = document.querySelector(".body");
var nuevoJuego = document.querySelector("#nuevo-juego");
var otroIntento = document.querySelector("#otro-intento");
var arrayLetraIncorrecta = [6];
var contador = 0;
// CREO NUEVO JUEGO
nuevoJuego.addEventListener("click",function(event){
    const  palabraAle =  palabraAleatoria().toLowerCase();
    var arrayLetraCorrecta = [palabraAle.length]
    event.preventDefault();
    tarimaHorca();
    escenario();
    horca();
    console.log(palabraAle);
    crearGuionesDePalabraCorrecta(palabraAle.length);
    crearGuionesDePalabraIncorrecta(6);
    vaulDePos(palabraAle.length,arrayLetraCorrecta);
    vaulDePos(6,arrayLetraIncorrecta)
    oirTecla.addEventListener("keydown",function(event){
        event.preventDefault();
        let g = event.key.toLowerCase();
    // Si la letra esta en la palabra la ingresa en la posicion correspondiente 
        if (palabraAle.includes(g)){
            for (var i = 0; i < palabraAle.length;i++ ){
                pincel.fillStyle = "green";
                pincel.font = "60px Serif";
                if (palabraAle[i] == g){
                    pincel.fillText(g,arrayLetraCorrecta[i],370);
                }
                    
                }
            }
    // Si la letra no esta en la palabra la ingresa en la posicion correcta
        if (!palabraAle.includes(g) && contador < 6){
            pincel.font = "60px Serif";
            pincel.fillStyle = "red";
            pincel.fillText(g,arrayLetraIncorrecta[contador],460);
            if (contador == 0){
                cabeza();
            }else{
                if(contador == 1){
                    torso();
                }else{
                    if(contador == 2){
                        brazoIzq();
                    }else{
                        if (contador == 3){
                            brazoDer();
                        }else{
                            if(contador == 4){
                                piernaDer();
                            }else{
                                if(contador == 5){
                                    piernaIzq();
                                    swal("PERDISTE!!","La Palabra era "+ palabraAle , "error");
                                }
                            }
                        }
                    }
                }
            }
            contador = contador + 1;
        }
                
    });
});       


        // funciones cuerpito
        //cabeza();
        //torso();
        //piernaIzq();
        //piernaDer();
        //brazoIzq();
        //brazoDer();
        
        