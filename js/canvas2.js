let canvas2 = window.document.getElementById('canvas2');
let ctx2 = canvas2.getContext('2d');

function Circle(x,y,dx,dy,radio){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radio = radio;

    this.draw = function(){
        ctx2.beginPath();
        ctx2.arc(this.x,this.y, this.radio,0,Math.PI * 2, false);
        ctx2.strokeStyle = "blue";
        ctx2.stroke();
    }
    this.update = function(){
        if (this.x + this.radio >= canvas2.width || this.x - this.radio < 0){
            this.dx = -this.dx;        
        }
        if(this.y + this.radio > canvas2.height || this.y - this.radio < 0){
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;
        this.draw();
    }
}

let circuloArray = [];

for(let i = 0; i<= 100;i++){
    let radio = 10;
    let x = Math.random() * (canvas2.width - radio * 2) + radio;
    let y = Math.random() * (canvas2.height - radio * 2) + radio;
    var dx = ((Math.random() - 0.5) * 5) + 3; 
    var dy = ((Math.random() - 0.5) * 5) + 3;
    
    circuloArray.push(new Circle(x,y,dx,dy,radio));    
}
