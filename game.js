(function(root){
  var Game = root.Asteroids = (root.Asteroids || {});

  var Game = Asteroids.Game = function Game (ctx) {
    var DIM_X = 1000;
    var DIM_Y = 1000;
    var canvas = document.createElement('canvas');
    canvas.id = "myCanvas";
    this.ctx = ctx.getContext('2d');
    this.asteroids = [];
    this.addAsteroids(10)
    this.draw()
    this.move()
  }

  Game.prototype.addAsteroids = function(numAsteroids) {
    for(var i = 0; i < numAsteroids; i++) {
      this.asteroids.push(Asteroids.randomAsteroid());
    }
  }

  Game.prototype.draw = function () {
    this.ctx.clearRect(0,0,1000,1000);
    var ctxnew = this.ctx
    this.asteroids.forEach(function(asteroid) {
      asteroid.draw(ctxnew);
    })
  }

  Game.prototype.move = function () {
    this.asteroids.forEach(function(asteroid) {
      asteroid.move();
    })
  };

  Game.prototype.removeAsteroid = function(ast) {
    this.asteroids.splice(this.asteroids.indexOf(ast), 1);
  }

  Game.prototype.step = function () {
    this.move();
    var asteroidsList = this.asteroids
    for(var i = 0; i < asteroidsList.length; i++){
      if (false) {

      } else if (asteroidsList[i].isOffMap()){
        this.removeAsteroid(asteroidsList[i]);
        this.addAsteroids(1);
      }
    }
    this.draw()
  }

})(window)