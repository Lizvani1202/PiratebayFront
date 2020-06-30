import { Component, OnInit } from '@angular/core';
import { Orden } from '../models/orden';
import { OrdenServiceService } from '../service/orden-service.service';

@Component({
  selector: 'app-entregas',
  templateUrl: './entregas.component.html',
  styleUrls: ['./entregas.component.css']
})
export class EntregasComponent implements OnInit {

  constructor(private Ordenservicio:OrdenServiceService) { }
  OrdenTabla:Orden[];
  ngOnInit() {
    this.ObtenerDatos();
  }
  ObtenerDatos(): any{
    this.Ordenservicio.OrdenGet().subscribe(data=>this.OrdenTabla=data);
    this.Filtrar();
  }
  Filtrar(): void{
    for(let n=0;n<this.OrdenTabla.length;n++)
    {
      console.log(this.OrdenTabla[n]);
    }

  }

}
