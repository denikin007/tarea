import { Component, OnInit } from '@angular/core';
import { Producto } from '../models/producto.interface';

@Component({
  selector: 'app-producto-create',
  templateUrl: './producto-create.component.html',
  styleUrls: ['./producto-create.component.css']
})
export class ProductoCreateComponent implements OnInit {

  producto:Producto={
    nombre:"",
    precio:0,
    stock:0,
    cantidad:0,
    marca:"",
    image_url:""
  }
  constructor() { }

  ngOnInit() {
    
  }

  yesAction():void{
    console.log("yes");
  }

  noAction():void{
    console.log("no");
  }
}
