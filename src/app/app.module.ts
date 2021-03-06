import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
// import { ProductoModule } from './producto/producto.module';


// import { MaterialModule } from './material/material.module';

import { LayoutModule } from './layout/layout.module';
import {AppRoutingModule} from './app-routing.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    // ProductoModule,
    // MaterialModule,
    LayoutModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
