import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'weather';
  city:string=''
  dcity:String=''
  temp_c:string=''
  wind:string=''
  humidity:string=''
  image:string=''

  setCity(event:any){
      this.city=event.target.value
  }

  checkWeather(){
    this.dcity=this.city;

    fetch(`http://api.weatherapi.com/v1/current.json?key=412b492bf8de4497ae193119252801&q=${this.dcity}`)
    .then((response)=> response.json())

    .then((data)=>{
      this.temp_c ="Temperature: " +data.current.temp_c + "C"
      this.image=data.current.condition.icon
      this.wind = "Wind Speed: " + data.current.wind_kph + "km/hr"
      this.humidity ="Humidity: " +data.current.humidity + "%"
    })
  }

}
