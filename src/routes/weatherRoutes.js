const express = require("express");
const axios = require("axios");
const router = express.Router();

const API_KEY = "60a685e91e82eaff1494be23be6f6c6c";

router.get("/weather/:city", async (req, res) => {
    try {
        const city = req.params.city;
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
        const weatherData = {
            city: response.data.name,
            temperature: `${response.data.main.temp}°C`,
            condition: response.data.weather[0].description
        };
        res.json(weatherData);
    } catch (error) {
        res.status(500).json({ error: "Could not fetch weather data" });
    }
});

module.exports = router;