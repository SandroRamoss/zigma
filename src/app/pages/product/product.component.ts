import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WebrestService } from '../../services/webrest.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styles: []
})
export class ProductComponent implements OnInit {

    product: any [] = [];

  constructor( private activetedRoute: ActivatedRoute,
               private webrest: WebrestService) {

    this.activetedRoute.params.subscribe( params => {
       console.log( params.id );
       this.product = this.webrest.getNewArticulo( params.product);
       console.log( this.product );
    });
  }

  ngOnInit(): void {
  }

}
