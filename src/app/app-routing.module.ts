import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './layout/home/home.component';


const routesApp:Routes=[
  { path:'home', component: HomeComponent },
  { path: 'producto', loadChildren: 'src/app/producto/producto.module#ProductoModule' },
  { path: '**', pathMatch:'full', redirectTo:'home' }

]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routesApp)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
