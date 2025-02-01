import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  temp_c:string=''
  constructor() { }

  checkWeather(city:string){
  
    fetch(`http://api.weatherapi.com/v1/current.json?key=412b492bf8de4497ae193119252801&q=${city}`)
    .then((response)=> response.json())

    .then((data)=>{
      console.log(data)
      this.temp_c= "Temperature: " + data.current.temp_c;

    })

    
  }
}
