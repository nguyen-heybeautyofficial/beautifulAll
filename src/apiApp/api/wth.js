import React, { Component } from 'react'
 
export async function getWeather(lat, lon) {
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7b4d5b360735644c271d8707f42fe696`;
    const response = await fetch(weatherUrl)
    return response.json();;

}