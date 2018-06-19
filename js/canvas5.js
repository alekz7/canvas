let canvas5 = window.document.getElementById('canvas5');
let ctx5 = canvas5.getContext('2d');
let canvasPos5 = getPosition(canvas5);

let mouse5 = {
    x: undefined,
    y: undefined
}

let circuloArray5 = [];

var colorArray = ["#FF990D","#E86C0C","#FF4A00","#E82C0C","#FF0D0D"];

window.addEventListener('mousemove',
    function(event){
        mouse5.x = event.x - canvasPos5.x;
        mouse5.y = event.y - canvasPos5.y;        
})

window.addEventListener('resize', 
    function(){
        canvas5.width   = window.innerWidth;
        canvas5.height  = window.innerHeight;
})

addEventListener('click',function(event){
    canvasPos5 = getPosition(canvas5);    
    circuloArray5 = [];    
    for (let i = 0 ; i <= 50; i ++){
        const radio = (Math.random() * 3) + 1;        
        circuloArray5.push(new Particle(
            10 * i,
            // canvasPos5.x + (canvas5.width / 2)
            800 * i,
            // canvasPos5.y + (canvas5.height / 2),
            radio));
    }

})

function Particle(x,y,radio){
    this.x = x;
    this.y = y;    
    this.radio = radio;    
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
    this.radians = Math.random() * Math.PI * 2;
    this.velocity = 0.05;
    this.distanceFromCenter = randomIntFromRange(25,60);
    this.lastMouse = {x: x, y: y};
         
    this.update = () => {              
        const lastPoint = { x:this.x, y:this.y};

        // Move this points over time
        this.radians += this.velocity;

        // Drag effect
        this.lastMouse.x += (mouse5.x - this.lastMouse.x) * 0.05;
        this.lastMouse.y += (mouse5.y - this.lastMouse.y) * 0.05;
        // this.lastMouse.y  += (mouse5.y - this.lastMouse.y) + 0.05;
        //circular motion
        this.x = this.lastMouse.x + Math.cos(this.radians) * this.distanceFromCenter;
        this.y = this.lastMouse.y + Math.sin(this.radians) * this.distanceFromCenter;

        
        // this.x = mouse5.x + Math.cos(this.radians) * 
        //     this.distanceFromCenter;
        // this.y = mouse5.y + Math.sin(this.radians) *
        //     this.distanceFromCenter;
        this.draw(lastPoint);
    }
    this.draw = lastPoint => { 
        ctx5.beginPath();
        // ctx5.arc(this.x,this.y, this.radio,0,Math.PI * 2, false);
        ctx5.strokeStyle = this.color;
        ctx5.lineWidth = this.radius;
        ctx5.moveTo(lastPoint.x, lastPoint.y);
        ctx5.lineTo(this.x, this.y);        
        ctx5.stroke();        
        ctx5.closePath();
    }
}
