import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ClimaService {
  API_URL= 'https://api.openweathermap.org/data/2.5/weather';
  API_KEY = 'a2a59c9e49404ab6f6b3bdc51757afa4'

  constructor( private http: HttpClient ) { }


  getClima( ciudad: string ){
  //api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
    
    const params = new HttpParams()
              .set( 'q', ciudad )
              .set( 'appid', this.API_KEY );

    return this.http.get( this.API_URL, { params: params } );
  }
}
