import { Component, OnInit } from '@angular/core';
import { Orden } from '../models/orden';
import { OrdenServiceService } from '../service/orden-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entregas',
  templateUrl: './entregas.component.html',
  styleUrls: ['./entregas.component.css']
})
export class EntregasComponent implements OnInit {

  constructor(private Ordenservicio:OrdenServiceService,private router:Router) { }
  OrdenTabla:Orden[];
  aux:any;
  ngOnInit() {
    this.ObtenerDatos();
  }
  ObtenerDatos(){
    this.Ordenservicio.OrdenGet().subscribe(data=>this.OrdenTabla=data);
    this.aux=this.OrdenTabla;
    this.Filtrar();
  }
  Filtrar(): void{
   /* for(let n=0;n<this.OrdenTabla.length;n++)
    {
      console.log(this.OrdenTabla[n]);
    }*/

    console.log();

  }
  detalle(id)
  {
    localStorage.setItem("id",id);
    console.log(id);
    this.router.navigate(['/detalle']);
  }
  editar(id)
  {
    localStorage.setItem("id",id);
    console.log(id);
    this.router.navigate(['/actualizar']);
  }

}
