const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'sha512-jyxctAwOO6BWUY0QhQLQL0OEyTxZJDQ1dhROSfUHsyngGGppsWr9ES9rvsoRaXVp9HZc/H/MtVr0HhtSraLbVA==?_PKI'
    }
  };
  
  fetch('https://api.truckercloud.com/api/v4/carriers', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));