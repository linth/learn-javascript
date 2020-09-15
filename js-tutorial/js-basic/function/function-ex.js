/*
  Goal: learn to use callback function and also understand how to use function.

  keyword:
    - function
    - callback function

  References:
    -
*/

function useless(callback) {
  return callback();
}


function show_data() {
  console.log('[Function] show_data');
}

useless(show_data)
