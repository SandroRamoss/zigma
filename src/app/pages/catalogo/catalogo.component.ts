import { Component, OnInit } from '@angular/core';
import { WebrestService } from '../../services/webrest.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css'],
})
export class CatalogoComponent implements OnInit {

  constructor(private rest: WebrestService, private router: Router) {}
  products: any[] = [];
  p: number = 1;


  ngOnInit(): void {
    this.rest.getNewArticulos().subscribe((data: any) => {
      console.log(data);
      this.products = data;
    });
  }

  verProduct(id: number) {
    this.router.navigate(['product', id]);
  }
}
