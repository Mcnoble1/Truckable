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

    const carriersOptions = {
      method: 'GET',
      url: 'https://api.truckercloud.com/api/v4/carriers',
      headers: {
        accept: 'application/json',
        Authorization: authToken,
      },
    };

    const carriersResponse = await axios.request(carriersOptions);
    res.status(carriersResponse.status).json(carriersResponse.data);
  } catch (error) {
    res.status(error.response.status || 500).json({ error: error.message });
  }
}
