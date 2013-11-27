(function(root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});
  var canv = document.getElementById("myCanvas");
  Function.prototype.inherits = function(superclass) {
    function Surrogate () {};
    Surrogate.prototype = superclass.prototype;
    this.prototype = new Surrogate();
  }

  var Asteroid = Asteroids.Asteroid = function Asteroid () {
    var COLOR = 'black';
    var RADIUS = 10;
    Asteroids.MovingObject.call(this, RADIUS, COLOR);
  };

  var randomAsteroid = Asteroids.setCanv = function(c) {
    canv = c
  }


  var randomAsteroid = Asteroids.randomAsteroid = function(dimX, dimY) {
    var a = new Asteroid();
    a.pos = pickStart();
    a.vel = [Math.floor(Math.random()*40)-20, Math.floor(Math.random()*40)-20 ]
    console.log(a.vel)
    return a
    // a.draw(canv)
  }

  var pickStart = function(){
    var xmin = 0;
    var ymin = 0;
    var xmax = canv.width
    var ymax = canv.height
    var randomCoord = Math.floor(Math.random()*canv.height)
    var options = [
    [xmin, randomCoord],
    [xmax, randomCoord],
    [randomCoord, ymax],
    [randomCoord, ymin]]
    startPos = options[Math.floor(Math.random()*4)]
    return startPos
  }

  Asteroid.inherits(Asteroids.MovingObject);

  // randomAsteroid();
  // randomAsteroid();
  // randomAsteroid();
  // randomAsteroid();
  // randomAsteroid();

})(window);