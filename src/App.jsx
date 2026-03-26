import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { weatherforcastApi } from './api/weatherforcast'
import './App.css'
import { categoryApi } from './api/category'

function App() {
  const [weatherData, setWeatherData] = useState("");
  const [category, setCategory] = useState("");


  useEffect(()=>{
   const fetchData = async () => {
    try {
      const weatherApiResponse = await weatherforcastApi.get();
      const categoryApiResponse = await categoryApi.get();

      const weatherInformation = JSON.stringify(weatherApiResponse.data); 
      const categorygetAll = JSON.stringify(categoryApiResponse.data); 

      console.log(weatherInformation);
      setWeatherData(weatherInformation);
      setCategory(categorygetAll);

    } catch(err) {
      console.error("Error caught:", err);
      setWeatherData("Error Bruhhh");
    }
  };
  
  fetchData();
}, []);


  return (
    <>
      <h1>Rahul Lama React Application</h1>
      <p>Weather data:{weatherData}</p>
      <br/>
      <br/>
      <p>Category data: {category}</p>
    </>
  )
}

export default App
