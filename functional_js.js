// Simple currying type function
function slicer(array) {
  return function(count) {
    return array.slice(count);
  }
}
var a = slicer([1,2,3,45,6,6]);
var b = a(3);
console.log(b);
console.log(slicer([2,3,45,6,67,8])(2));

// Simple function that uses currying to evaluate the final result
function flow() {
  var functions = arguments;
  return function(array) {
    var value = array;
    for (var i = 0; i < functions.length; i++) {
      value = functions[i](value);
    }
    return value;
  }
}

function drop(count) {
  return function(array) {
    for (var i = 0; i < count; i++) {
      array.shift();
    }
    return array;
  }
}

function map(factor) {
  return function(array) {
    return array.map(function(v){return v*factor});
  }
}

console.log(flow(drop(3))([1,2,3,4,5,5,6,7,8]));
console.log(flow(drop(3), map(4))([1,2,3,4,5,5,6,7,8]));
