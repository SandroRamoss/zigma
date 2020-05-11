import { Component, OnInit } from '@angular/core';
import { WebrestService } from '../../services/webrest.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

   bpro: any [] = [];

  constructor( private rest: WebrestService) { }
   buscar( termino: string ) {
  //     this.rest.getArticulo( termino )
  //     .subscribe((data: any) => {
  //       console.log(data);
  //       this.bpro = data;

      // });
   }
  ngOnInit(): void {
  }


}
