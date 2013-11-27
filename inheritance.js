<script>

Function.prototype.inherits = function(superclass) {
  function Surrogate () {};
  Surrogate.prototype = superclass.prototype;
  this.prototype = new Surrogate();
}
////////////////////////////
function MovingObject(radius, color) {
  this.pos = [50,50]
  this.radius = radius
  this.color = color
  this.vel = [0,0]
};


MovingObject.prototype.move = function(){
  this.pos = [this.pos[0]+this.vel[0],this.pos[1]+this.vel[1]]
}

MovingObject.prototype.draw = function(ctx){
  var centerX = pos[0];
  var centerY = pos[1];
  var canvas = document.getElementById(ctx);
  var context = canvas.getContext('2d');

  context.beginPath();
  context.arc(centerX, centerY, this.radius, 0, 2 * Math.PI, false);
  context.fillStyle = this.color;
  context.fill();
  context.lineWidth = 1;
  context.strokeStyle = '#003300';
  context.stroke();
}



///////////////////////////
function Ship () {};
Ship.inherits(MovingObject);
Ship.prototype.shoot = function(){
  console.log("Bang!");
}

Ship.prototype.move = function() {
  console.log("Ship's move");
}


///////////////////////////
function Asteroid () {};
Asteroid.inherits(MovingObject);
Asteroid.prototype.drift = function(){
  console.log(".....!");
}








s = new Ship;
a = new Asteroid;

s.shoot();
a.drift();
s.move();

</script>