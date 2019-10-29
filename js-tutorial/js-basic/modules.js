/*
References:
  - https://www.geeksforgeeks.org/javascript-modules/
*/

function Rectangle() {

  let length, width;

  function create(l, w) {
    length = l;
    width = w;
  }

  function getArea() {
    return length * width;
  }

  function getPerimeter() {
    return 2 * (length + width)
  }

  let publicAPI = {
    create: create,
    getArea: getArea,
    getPerimeter: getPerimeter,
  };

  // return upon creation of a new instance.
  return publicAPI;
}


// create a Rectangle module instance.
let r = Rectangle();
r.create(5, 4)
console.log('Area: ' + r.getArea());
console.log('Perimeter: ' + r.getPerimeter());
