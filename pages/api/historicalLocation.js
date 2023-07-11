import axios from 'axios';

export default async function handler(req, res) {
  try {
    const options = {
        method: 'POST',
        url: 'https://api.truckercloud.com/api/v4/authenticate',
        headers: { accept: '*/*', 'content-type': 'application/json' },
        data: { password: 'changeme', userName: 'truckable' },
      };
  
      const response = await axios.request(options);
      const authToken = response.data.authToken;
      console.log(authToken);


    const fromDate = req.query.fromDate; // Get the fromDate parameter from the query string
    const toDate = req.query.toDate; // Get the toDate parameter from the query string

    const locationOptions = {
      method: 'POST',
      url: 'https://api.truckercloud.com/api/v4/subscriptions/pre-bind/historical-location',
      params: { fromDate, toDate },
      headers: {
        accept: '*/*',
        Authorization: authToken,
        'content-type': 'application/json',
      },
    };

    const locationResponse = await axios.request(locationOptions);
    res.status(locationResponse.status).json(locationResponse.data);
  } catch (error) {
    res.status(error.response.status || 500).json({ error: error.message });
  }
}
