import { Component, OnInit } from '@angular/core';
import { OrdenServiceService } from '../service/orden-service.service';
import { Router } from '@angular/router';
import { Orden } from '../models/orden';

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
  Update:any={
    numeroOrden:null,
    fechaPreparado: null,
    estado:null
}
  ObtenerDatos(){
    this.Ordenservice.OrdgenGetbyId(localStorage.getItem("id")).subscribe(data=>{
     this.Orden=data;
     this.Orden.estado=3;
    },error=>{

    });

    console.log(this.Orden);

  }
  volver(){
    this.router.navigate(['/']);
  }
  actualizar(id){
    this.Update.numeroOrden=id;
  }
  Preparado(id){

  }
  Despachado(id){

  }
  Entregado(id){

  }


}
