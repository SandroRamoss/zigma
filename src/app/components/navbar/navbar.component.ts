import { Component, OnInit } from "@angular/core";
import { WebrestService } from "../../services/webrest.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styles: [],
})
export class NavbarComponent implements OnInit {
  resultBusq = [];

  constructor(private rest: WebrestService, private router: Router) {}

  buscar(termino: string) {
    this.resultBusq = [];
    this.router.navigate(["/buscador", termino]);
  }

  buscar2(termino: string) {
    this.rest.buscarArticulo2(termino).subscribe((data: any) => {
      if (data) {
        this.resultBusq = data;
      } else {
        this.resultBusq = [];
      }
    });
  }

  verProduct(id: number) {
    this.resultBusq = [];
    this.router.navigate(["product", id]);
  }

  ngOnInit(): void {}
}
