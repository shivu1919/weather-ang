import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  standalone:true,
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
  constructor(private weather:WeatherService){}

  checkWeather(){
    this.weather.fetchWeather(this.city)
    .then(data=>{
      this.dcity=this.city
      this.temp_c="Temperature: " +data.temp_c
      this.wind="Wind Speed" + data.wind +" km/hr"
      this.humidity="Humidity: "+data.humidity
      this.image = data.condition.icon
    })
  }

}
