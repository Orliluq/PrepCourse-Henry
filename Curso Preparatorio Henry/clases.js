// FUNCIÓN CONSTRUCTORA
function Auto(puertas, color, marca, año, ruedas) {
    this.puertas = puertas;
    this.color = color;
    this.marca = marca;
    this.año = año;
    this.ruedas = ruedas;
 }
 let miPrimerAuto = new Auto(2, 'Rojo', 'Ferrari', 2018, 4);
 console.log(miPrimerAuto);
 console.log(miPrimerAuto.marca);
 
 
 // EXPRESIÓN DE CLASE
 class Auto {
    constructor(puertas, color, marca, año, ruedas) {
       this.puertas = puertas;
       this.color = color;
       this.marca = marca;
       this.año = año;
       this.ruedas = ruedas;
    }
 }
 Informacion() {
    console.log("Este es un " + this.marca + " de color " + this.color);
    }
 }

 var miSegundoAuto = new Auto(4, "Blanco", "Fiat", 2015, 4);

 miPrimerAuto.Informacion();

 let miSegundoAuto = new Auto(4, 'Blanco', 'Fiat', 2015, 4);
 console.log(miSegundoAuto);
 console.log(miSegundoAuto.marca);

 class Football {
    constructor(jugador) {
        this.jugador = jugador;
        }
        obtenerNombre() {

        }
    }

    var argentina = new Football("Messi");
    var brasil = new Football("Pele");

    argentina.obtenerNombre();
    brasil.obtenerNombre();
 

