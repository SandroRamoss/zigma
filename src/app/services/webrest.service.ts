import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebrestService {

  private tiendaurl = 'https://springboot-deploy-apicaterin.herokuapp.com/api/products';

  constructor( private http: HttpClient ) {
  }
    getNewArticulos() {
      return this.http.get(this.tiendaurl);
    }

    getB( termino: any) {
     return this.http.get(this.tiendaurl);
    }







}
