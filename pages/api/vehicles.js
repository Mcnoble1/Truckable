const options = {
    method: 'GET',
    headers: {
      accept: '*/*',
      Authorization: 'sha512-9hciqbEGo1443WSecU6atqFDQ2WkyV+5Apy4tcZgS4ADeXdnfBBcMaP8WKuq/kNecFELT5OYi0Qea/CYaA5lrA==?S0c4'
    }
  };
  
  fetch('https://api.truckercloud.com/api/v4/vehicles', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));