var canvas = document.getElementById('lienzo');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});



var c = canvas.getContext('2d');

function Circle(x, y, radius, dx, dy) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dx = dx;
    this.dy = dy;

    this.draw = function() {
        c.fillStyle = 'pink';
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fill();
        c.stroke();
    }

    this.random = function() {
        this.x = Math.floor(Math.random() * canvas.width);
        this.y = Math.floor(Math.random() * canvas.height);
        this.radius = 30;
        this.dx = 4;
        this.dy = 4;
    }

    this.move = function() {
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
            dx = -Math.abs(dx);
        }
        if (this.x - this.radius < 0) {
            dx = Math.abs(dx);
        }
        if (this.y + this.radius > canvas.height) {
            dy = -Math.abs(dx);
        }
        if (this.y - this.radius < 0) {
            dy = Math.abs(dx);
        }
        this.x += dx;
        this.y += dy;
        this.draw();
    }
}



class Quadrat {

    constructor() {
        this.alt = 40;
        this.ample = 40;
    }

    draw(x, y) {
        c.fillRect(x, y, this.alt, this.ample);
    }

}

var c1 = new Quadrat();
//c1.draw();

var img = new Image();
var contador = 1;


window.addEventListener('click', function(event) {
    c.clearRect(0, 0, canvas.width, canvas.height);
    window.addEventListener('mousemove', function(event) {
        img.src = './gif/Arxiu' + contador + '.gif';
        if (contador < 250) {
            contador++;
        } else {
            contador = 1;
        }
        //c1.draw(event.x, event.y);
        //if (event.x % 10 == 0 && contador < 252) {
        c.drawImage(img, event.x, event.y, 80, 80);
        //}

    });
});

window.addEventListener('keydown', function() {
    //img.src = './gif/Arxiu1.gif';
    //c1.draw(event.x, event.y);
    c.drawImage(img, x, y, 80, 80);
});



var circle = new Circle(200, 200, 20, 4, 4);
//console.log(circle);



function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.width, canvas.height);
    circle.move();
    c.beginPath();
    c.stroke();
}

//animate();