import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './layout/home/home.component';
import { ProductoListComponent } from './producto/producto-list/producto-list.component';
import { ProductoCreateComponent } from './producto/producto-create/producto-create.component';
import { ProductoEditComponent } from './producto/producto-edit/producto-edit.component';

const routesApp:Routes=[
  { path:'home', component: HomeComponent },
  { path: 'producto/lista', component: ProductoListComponent },
  { path: 'Producto/crear', component: ProductoCreateComponent },
  { path: 'producto/editar', component: ProductoEditComponent },
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
