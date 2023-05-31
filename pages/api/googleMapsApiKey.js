// pages/api/googleMapsApiKey.js

export default function handler(req, res) {
    const googleMapsApiKey = process.env.GOOGLE_MAPS_API_KEY;
    res.status(200).json({ apiKey: googleMapsApiKey });
  }
  