import { Component, OnInit } from '@angular/core';
import { WebrestService } from '../../services/webrest.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

   bpro = {
     image: '',
     name: '',
     price: '',
     quantity: ''
   };

  constructor( private rest: WebrestService,
               private router: Router) { }
   buscar( termino: string ) {
      this.rest.buscarArticulo( termino )
      .subscribe((data: any) => {
        console.log(data);
        this.bpro = data;
        

      });
      this.router.navigate(['/buscador', termino]);
   }
  ngOnInit(): void {
  }


}
