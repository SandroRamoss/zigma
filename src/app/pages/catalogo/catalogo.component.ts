import { Component, OnInit } from '@angular/core';
import { WebrestService } from '../../services/webrest.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

    productos: any[] = [];
    
  constructor( private rest: WebrestService, 
               private router: Router) {
     this.rest.getNewArticulos()
     .subscribe( (data: any ) => {
       console.log(data.products);
       this.productos = data.products;
     });

    //  this.rest.getNewPrecio()
    //  .subscribe((data: any ) => {
    //    this.precio = data[0].precioArticulo[data[0].precioArticulo.length - 1];
    //  });

   //oyeee sandro no te compres todo
    // peke se durmio 
   }
   verProduct( idx: number ){
    this.router.navigate(['product', idx]);
   }

  ngOnInit(): void {


  }

}
