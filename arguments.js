var sum = function() {
  var args = Array.prototype.slice.call(arguments);
  var sum = 0;

  args.forEach(function(num) {
    sum += num;
  })

  return sum;
};

// console.log(sum(5,5,5,55))

var Cat = function(){
}
Cat.prototype.meow = function (wrd) {
  console.log(wrd);
}

var Dog = function(){

}

Function.prototype.myBind = function(obj){
  var args = Array.prototype.slice.call(arguments).slice(1);
  console.log(args instanceof Array)
  obj.apply(this||window,args);
}

// this => age_one_year
// whatever => dog
// dog.this
// cat.age_one_year.myBind(dog)
// arr = [1,2,3];
// console.(sum(arr[0],arr[1],arr[3]));
// [1,2,3].sum.myBind([2])
// c = new Cat();
// c.meow("woof");
// d = new Dog();
// c.meow.myBind(c);
// d.meow("woof")

var curriedSum = function(numArgs) {
  var numbersToSum = [];
  var curSum = function(number){
    //var totalArgs = numArgs;
    console.log("I run!")
    if (!isNaN(number)){
      numbersToSum.push(number);
      console.log(numbersToSum);
    }
    if (numbersToSum.length == numArgs){
      sum = 0
      numbersToSum.forEach(function(num) {
        sum += num;
      })

      return sum

    } else {

      return curSum;

    }
  }
  return curSum;
}

var csum = curriedSum(4);
console.log(csum(5)(30)(3)(1)); // => 56