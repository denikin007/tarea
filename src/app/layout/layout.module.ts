import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [HeaderComponent, HomeComponent, FooterComponent],
  exports:[
    HeaderComponent,
    FooterComponent
  ]
})
export class LayoutModule { }
