import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { WebrestService } from "src/app/services/webrest.service";
@Component({
  selector: "app-buscador",
  templateUrl: "./buscador.component.html",
  styleUrls: ["./buscador.component.css"],
})
export class BuscadorComponent implements OnInit {
  resultados = [];
  busqueda = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private webrest: WebrestService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      console.log(params.termino);
      this.webrest.buscarArticulo(params.termino).subscribe((data: any) => {
        this.resultados = data;
        this.busqueda = true;
        console.log(this.resultados);
      });
    });
  }

  verProduct(id: number) {
    this.router.navigate(["product", id]);
  }
}
