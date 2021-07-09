import { Component, OnInit } from '@angular/core';
import { ClimaService } from '../../services/clima.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  ciudadBuscar: string = '';
  cargando: boolean = false;
  huboError: boolean =  false;
  ciudad: any = {
    nombre: '',
    temperatura: 0,
    humedad: 0,
    clima: ''
  };
  



  constructor( private climaService: ClimaService ) { }

  ngOnInit(): void {
  }

  obtenerClima(){
    if( this.ciudadBuscar.trim() === '' ){
      return;
    }
    this.cargando = true;
    this.climaService.getClima( this.ciudadBuscar )
      .subscribe( ({ name, main, weather }: any) =>{

        this.ciudad.nombre = name;
        this.ciudad.temperatura = main.temp;
        this.ciudad.humedad = main.humidity;
        this.ciudad.clima = weather[0].main;
        
        this.huboError = false;
        this.cargando = false;
        this.ciudadBuscar = '';

      },(err)=>{
        
        this.huboError = true;
        this.cargando = false;
      });   
  }

}
