var canvas = document.getElementById("lienzo");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

var c = canvas.getContext("2d");

var img = new Image();
var contador = 1;
let actiu = false;

window.addEventListener("dblclick", function () {
  c.clearRect(0, 0, canvas.width, canvas.height);
});

window.addEventListener("click", function (event) {
  if (actiu) {
    window.removeEventListener("mousemove", dibuixa);
    actiu = false;
  } else {
    window.addEventListener("mousemove", dibuixa);
    actiu = true;
  }
  checkInk();
});

function checkInk() {
  if (actiu) {
    document.getElementById("ink").innerText = "Actiu";
  } else {
    document.getElementById("ink").innerText = "Desactivat";
  }
}

function dibuixa(event) {
  console.log(event.x);
  img.src = "./gif/Arxiu" + contador + ".gif";
  if (contador < 250) {
    contador++;
  } else {
    contador = 1;
  }
  c.drawImage(img, event.x, event.y, 60, 60);
}

window.addEventListener("keydown", function () {
  c.drawImage(img, x, y, 80, 80);
});
