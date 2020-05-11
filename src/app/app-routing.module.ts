import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';

const routes: Routes = [
 { path: 'home', component: HomeComponent },
 { path: 'catalogo', component: CatalogoComponent },
 { path: '**', pathMatch: 'full', redirectTo: 'home' }
];


@NgModule({
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
