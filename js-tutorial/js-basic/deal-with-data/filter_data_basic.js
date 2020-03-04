/*
  Goal: learn how to filter/split data from array.

  keyword:
    - filter1
    - array

  References:
    - https://wcc723.github.io/javascript/2017/06/29/es6-native-array/
*/

var arr = [300, 111, 2, 3, 80, 100, 38, 88, 62];

const param_with_ifelse = () => {
  let res_arr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 50) {
      res_arr.push(arr[i]);
    }
  }
  return res_arr;
}

const get_data_larger50 = () => {
  return arr.filter(function (value, index, array) {
    return value > 50;
  });
}

// imporve the above the function of get_data_larger50.
const imporved_get_data_larger50 = arr.filter(function(value, index, array) {
  return value > 50;
})


// imporved rule: create a regular interface to provide searching data.
const get_larger_result = (array, num) => {
  return array.filter( (value, index, array) => {
    return value > num;
  })
}

const get_less_result = (array, num) => {
  return array.filter( (value, index, array) => {
    return value < num;
  })
}
console.log(get_data_larger50());
console.log(get_larger_result(arr, 111));
console.log(get_less_result(arr, 30));
