import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WebrestService } from '../../services/webrest.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styles: []
})
export class ProductComponent implements OnInit {

  product = {
    image: '',
    name: '',
    price: '',
    quantity: ''
  }

  constructor(private activetedRoute: ActivatedRoute,
    private webrest: WebrestService) { }

  ngOnInit(): void {
    this.activetedRoute.params.subscribe(params => {
      console.log(params.id);
      this.webrest.getNewArticulo(params.id)
        .subscribe((product: any) => {
          console.log(product)
          this.product = product
        }
        )
    });
  }

}
