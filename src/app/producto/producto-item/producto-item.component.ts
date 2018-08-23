import { Component, OnInit, Input } from "@angular/core";
import { Producto } from "../models/producto.interface";

@Component({
  selector: "app-producto-item",
  templateUrl: "./producto-item.component.html",
  styleUrls: ["./producto-item.component.css"]
})

//alt + shift + f windows
export class ProductoItemComponent implements OnInit {
  
  @Input()
  producto: Producto;
  constructor() {
    
  }
  verDetalle():void{
    console.log(`producto: ${this.producto.nombre}`);
  }
  ngOnInit() {}
}
