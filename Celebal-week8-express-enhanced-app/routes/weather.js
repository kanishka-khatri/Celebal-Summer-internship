const express = require('express');
const axios = require('axios');
require('dotenv').config();

const router = express.Router();

router.get('/weather/:city', async (req, res, next) => {
  const city = req.params.city;
  const apiKey = process.env.WEATHER_API_KEY;

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    res.status(200).json({ city, temperature: response.data.main.temp, description: response.data.weather[0].description });
  } catch (err) {
    next(err); // Pass to global error handler
  }
});

module.exports = router;
