let canvas3 = window.document.getElementById('canvas3');
let ctx3 = canvas3.getContext('2d');
let canvasPos = getPosition(canvas3);

let mouse = {
    x: undefined,
    y: undefined
}

let maxRadio = 40;
let minRadio = 2;

var colorArray = ["#F2009D","#0B89D7","#34D801","#F1E42D","#F37024"];

window.addEventListener('mousemove',
    function(event){
        mouse.x = event.x - canvasPos.x;
        mouse.y = event.y - canvasPos.y;        
})

window.addEventListener('resize', 
    function(){
        canvas3.width   = window.innerWidth;
        canvas3.height  = window.innerHeight;
})

function Circle(x,y,dx,dy,radio){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radio = radio;
    this.minRadio = radio;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

    this.draw = function(){
        ctx3.beginPath();
        ctx3.arc(this.x,this.y, this.radio,0,Math.PI * 2, false);
        ctx3.strokeStyle = "blue";
        ctx3.stroke();
        ctx3.fillStyle = this.color;
        ctx3.fill();
    }
    this.update = function(){
        if (this.x + this.radio >= canvas3.width || this.x - this.radio < 0){
            this.dx = -this.dx;        
        }
        if(this.y + this.radio > canvas3.height || this.y - this.radio < 0){
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;

        // collition
        if (   mouse.x - this.x < 15
            && mouse.x - this.x > -15
            && mouse.y - this.y < 15
            && mouse.y - this.y > -15
        ) 
        {
            if (this.radio < maxRadio){
                this.radio += 1;
            }                        
        } else if (this.radio > this.minRadio) {
            this.radio -= 1;
        }       

        this.draw();
    }
}

let circuloArray2 = [];

for(let i = 0; i<= 200;i++){
    let radio = Math.random() * 3 + 1;
    let x = Math.random() * (canvas3.width - radio * 2) + radio;
    let y = Math.random() * (canvas3.height - radio * 2) + radio;
    var dx = ((Math.random() - 0.5) * 2) + 1; 
    var dy = ((Math.random() - 0.5) * 2) + 1;
    
    circuloArray2.push(new Circle(x,y,dx,dy,radio));    
}
