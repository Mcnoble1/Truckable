const options = {
    method: 'POST',
    headers: {accept: '*/*', 'content-type': 'application/json'},
    body: JSON.stringify({password: 'string', userName: 'string'})
  };
  
  fetch('https://api.truckercloud.com/api/v4/authenticate', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));