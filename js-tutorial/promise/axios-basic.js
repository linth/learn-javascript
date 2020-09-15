/*
Reference:
  - https://www.npmjs.com/package/axios
*/
const axios = require('axios');

var sector;

function get_sector() {
  return axios.get('/get_sector/', {

  })
  .then(function(response) {
    console.log(response.data);
    sector = response.data;
    return response.data;
  })
  .catch(function(error) {
    console.log(error);
    return error
  })
}

setTimeout(get_sector, 2000);

// get_sector();

// function show() {
//   console.log('show information.');
// }

// setTimeout(instance, 2000);
