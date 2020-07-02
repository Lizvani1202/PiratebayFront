import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Orden } from '../models/orden';

@Injectable({
  providedIn: 'root'
})
export class OrdenServiceService {

  URL = "http://localhost:8040/api/orden";
  URL2 = "http://localhost:8040/api/buscar";
  URL3 = "http://localhost:8040/api/update";

  constructor(private http:HttpClient) { }
  OrdenGet(){
    return this.http.get<Orden[]>(this.URL);
  }
  OrdgenGetbyId(id){
    return this.http.get<Orden>(this.URL2+"/"+id);
  }
  OrdenPut(id){
    return this.http.put(this.URL3,id);
  }
}
