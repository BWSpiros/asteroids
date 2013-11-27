(function(root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});
  var canv = document.getElementById("myCanvas");
  Function.prototype.inherits = function(superclass) {
    function Surrogate () {};
    Surrogate.prototype = superclass.prototype;
    this.prototype = new Surrogate();
  }

  var MovingObject = Asteroids.MovingObject = function MovingObject(radius, color) {
    this.pos = [Math.floor(Math.random()*1000), Math.floor(Math.random()*1000)];
    this.radius = radius;
    this.color = color;
    this.vel = [0,0];
  };


  MovingObject.prototype.isOffMap = function(){
    if (this.pos[0] > 1000 || this.pos[0] < 0 || this.pos[1] > 1000 || this.pos[1] < 0 ){
      return true;
    } else {
      return false;
    }
  }

  MovingObject.prototype.move = function(){
    this.pos = [this.pos[0]+this.vel[0],this.pos[1]+this.vel[1]];
  };

  MovingObject.prototype.draw = function(ctx){
    // var canvas = ctx;
    var c = ctx; // canvas.getContext('2d')
    var centerX = this.pos[0];
    var centerY = this.pos[1];

    c.fillStyle = this.color;
    c.beginPath();

    c.arc(
      centerX,
      centerY,
      this.radius,
      0,
      2 * Math.PI,
      false);

    c.fill();
  };

  MovingObject.prototype.isCollidedWith = function(otherObject){
    var that = otherObject;
    var maxDistance = this.radius + that.radius;
    if (Math.sqrt(Math.pow((that.pos[0]-this.pos[0]),2)+Math.pow((that.pos[1]-this.pos[1]),2)) < maxDistance) {
      return true;
    } else {
      return false;
    }
  };



  ///////////////////////////
  function Ship () {};
  Ship.inherits(MovingObject);

  ///////////////////////////
  function Asteroid () {};
  Asteroid.inherits(MovingObject);

  // newObject = new Asteroids.MovingObject(50, 'green');
  // console.log(newObject);
  //
  // newObject2 = new Asteroids.MovingObject(50, 'red');
  //
  // console.log(newObject2);
  //
  // newObject.draw(canv);
  //
  // newObject2.draw(canv);
})(window);