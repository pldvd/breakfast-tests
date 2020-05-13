const axios = require('axios');

function getResource(url) {
  return axios.get(url).then(response => response.data);
}

exports.getResource = getResource;