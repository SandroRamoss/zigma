import { Component, OnInit } from '@angular/core';
import { WebrestService } from '../../services/webrest.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  products: any[] = [];

  constructor(private rest: WebrestService, private router: Router) { }

  ngOnInit(): void {
    this.rest.getNewArticulos()
      .subscribe((data: any) => {
        // console.log(data.products);
        this.products = data.products;
      });
  }

  verProduct(id: number) {
    this.router.navigate(['product', id]);
  }

}
