var vp = document.getElementById ("villaplatzi");
var papel = vp.getContext("2d");

//Variables animales y fondo//
var tile =
{
    url: "tile.png",
    cargaOK: false
}

var vaca = 
{
    url: "vaca.png",
    cargaOK: false
}

var cerdo =
{
    url: "cerdo.png",
    cargaOK: false
}

var pollo =
{
    url: "pollo.png",
    cargaOK: false
}

// Vaca //
vaca.imagen = new Image ();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVaca);

// Tile //
tile.imagen = new Image();
tile.imagen.src = tile.url;
tile.imagen.addEventListener("load", cargarTile);

// Cerdo //
cerdo.imagen = new Image ();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);

// Pollo //
pollo.imagen = new Image ();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollo);

//Cargar Animales//
function cargarVaca ()
{
    vaca.cargaOK = true ;
    dibujar() ;
}

function cargarTile()
{
    tile.cargaOK = true ;
    dibujar() ;
}

function cargarCerdo()
{
    cerdo.cargaOK = true;
    dibujar() ;
}
function cargarPollo()
{
    pollo.cargaOK = true;
    dibujar() ;
}

// Dibujo //
var cantidad = aleatorio(0, 4);
function dibujar ()
{
    if (tile.cargaOK)
    {
        papel.drawImage(tile.imagen, 0 ,0);
    }
   
    if(vaca.cargaOK )
    {
        for (var v=0; v < cantidad; v++)
        {
        var x = aleatorio (0, 7);
        var y = aleatorio (0 ,7);
        
        //Para que no unan tanto los aleatorios//
        var x = x * 60;
        var y = y * 60;

        papel.drawImage(vaca.imagen, x, y);
        }
    }

    if(pollo.cargaOK )
    {
        for (var v=0; v < cantidad; v++)
        {
        var x = aleatorio (0, 7);
        var y = aleatorio (0 ,7);
        
        //Para que no unan tanto los aleatorios//
        var x = x * 60;
        var y = y * 60;

        papel.drawImage(pollo.imagen, x, y);
        }
    }
    
    if(cerdo.cargaOK )
    {
        papel.drawImage(cerdo.imagen, xCerdo, yCerdo) 
    }
    
}


// Aleatorio//
function aleatorio(min, maxi)
{
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
    return resultado;
}

//Movimiento Cerdo//

var teclas =
{
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39,
};
console.log("keydown");

document.addEventListener("keydown", moverCerdo,);
var xCerdo = 100
var yCerdo = 100

function moverCerdo(evento)
{
    console.log(evento);
  switch(evento.keyCode)
  {
      case teclas.UP:
        yCerdo -= 10;
      dibujar();
      break;

      case teclas.DOWN:
        yCerdo += 10;
        dibujar();
        break;

      case teclas.LEFT:
        xCerdo -= 10;
        dibujar();
        break;

      case teclas.RIGHT:
        xCerdo += 10;
        dibujar();
        break;
  }
}
