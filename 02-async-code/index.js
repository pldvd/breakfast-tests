const axios = require('axios');

function getResource(url) {
  return axios.get(url).then(response => response.data);
}

function myPromise(input) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (input % 2 === 0) {
        resolve('the number is even');
      } else reject('this is an odd number');
    }, 1000)
  })
}

exports.getResource = getResource;
exports.myPromise = myPromise;