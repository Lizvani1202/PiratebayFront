import { Component, OnInit } from '@angular/core';
import { OrdenServiceService } from '../service/orden-service.service';
import { error } from 'protractor';
import { Orden } from '../models/orden';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  constructor(private Ordenservice:OrdenServiceService,private router:Router) { }

  ngOnInit() {
    this.ObtenerDatos();
  }
  Orden:Orden[];
  ObtenerDatos(){
    this.Ordenservice.OrdgenGetbyId(localStorage.getItem("id")).subscribe(data=>{
     this.Orden=data;
     console.log(data);

    },error=>{

    })
  }
  volver(){
    this.router.navigate(['/']);
  }

}
