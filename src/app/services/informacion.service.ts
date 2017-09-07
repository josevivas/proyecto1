import { Injectable } from '@angular/core';
import {Http} from '@angular/http';


@Injectable()
export class InformacionService {

  info:any = {};
  cargada:boolean = false;
  cargadaNosotros:boolean = false;
  equipo:any[] = [];

  constructor( public http:Http ) {
    this.cargaInfo();
    this.cargaNosotros();
   }

   public cargaInfo () {
     this.http.get("assets/data/info-pagina.json").subscribe( data => {
   //    console.log(data.json());
       this.cargada = true;
       this.info = data.json();
     });
   }

   public cargaNosotros () {
     this.http.get("https://portfolio-a113d.firebaseio.com/equipo.json").subscribe( data => {
//       console.log(data.json());
       this.cargadaNosotros = true;
       this.equipo = data.json();
     });
   }
}
