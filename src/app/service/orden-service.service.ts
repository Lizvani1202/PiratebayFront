import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Orden } from '../models/orden';

@Injectable({
  providedIn: 'root'
})
export class OrdenServiceService {
  URL = "http://169.254.95.103:8040/api/orden";
  URL2 = "http://169.254.95.103:8040/api/buscar";
  constructor(private http:HttpClient) { }
  OrdenGet(){
    return this.http.get<Orden[]>(this.URL);
  }
  OrdgenGetbyId(id){
    return this.http.get<Orden[]>(this.URL2+"/"+id);
  }
  OrdenPost(){

  }
}
