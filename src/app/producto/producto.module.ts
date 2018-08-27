import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { ProductoItemComponent } from './producto-item/producto-item.component';
import { ProductoListComponent } from './producto-list/producto-list.component';
import { ProductoRoutingModule } from './producto-routing.module';
import { ProductoCreateComponent } from './producto-create/producto-create.component';
import { ProductoEditComponent } from './producto-edit/producto-edit.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProductoRoutingModule,
    MaterialModule
  ],
  declarations: [
    ProductoItemComponent,
    ProductoListComponent, 
    ProductoCreateComponent, 
    ProductoEditComponent
  ],
  exports: [
     ProductoItemComponent,
     ProductoListComponent,
     ProductoEditComponent,
     ProductoCreateComponent

  ], 
  providers: [
  ]
})
export class ProductoModule { 
}
