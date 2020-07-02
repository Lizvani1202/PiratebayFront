import { Component, OnInit } from '@angular/core';
import { OrdenServiceService } from '../service/orden-service.service';
import { Router } from '@angular/router';
import { Orden } from '../models/orden';
import { error } from 'protractor';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  constructor(private Ordenservice: OrdenServiceService, private router:Router) {
    this.ObtenerDatos();
  }

  ngOnInit() {
  }
  Orden:Orden={
    idOrden:null,
    cantidad:null,
    cliente:null,
    estado:null,
    fechaDespachado:null,
    fechaEntregado:null,
    fechaPagado:null,
    fechaPreparado:null,
    monto:null,
    numeroOrden:null,
    productoNombre:null,
    productoTipo:null,
    tx_date:null
  };
  Update1:any={
    numeroOrden:null,
    fechaPreparado: null,
    estado:null
}
Update2:any={
  numeroOrden:null,
  fechaDespachado: null,
  estado:null
}
Update3:any={
  numeroOrden:null,
  fechaEntregado: null,
  estado:null
}
  ObtenerDatos(){
    this.Ordenservice.OrdgenGetbyId(localStorage.getItem("id")).subscribe(data=>{
     this.Orden=data;
    },error=>{

    });

    console.log(this.Orden);

  }
  volver(){
    this.router.navigate(['/']);
  }
  Preparado(id){
    let date = new Date()
    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()
    let fecha=day+"/"+month+"/"+year;
    this.Update1.numeroOrden=this.Orden.numeroOrden;
    this.Update1.fechaPreparado=fecha;
    this.Update1.estado=1;
    this.Ordenservice.OrdenPut(this.Update1).subscribe(data=>{
      console.log(data);
    },error=>{

    });
  }
  Despachado(id){
    let date = new Date()
    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()
    let fecha=day+"/"+month+"/"+year;
    this.Update2.numeroOrden=this.Orden.numeroOrden;
    this.Update2.fechaDespachado=fecha;
    this.Update2.estado=2;
    this.Ordenservice.OrdenPut(this.Update2).subscribe(data=>{
      console.log(data);
    },error=>{

    });

  }
  Entregado(id){
    let date = new Date()
    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()
    let fecha=day+"/"+month+"/"+year;
    this.Update3.numeroOrden=this.Orden.numeroOrden;
    this.Update3.fechaEntregado=fecha;
    this.Update3.estado=3;
    this.Ordenservice.OrdenPut(this.Update3).subscribe(data=>{
      console.log(data);
    },error=>{

    });

  }


}
