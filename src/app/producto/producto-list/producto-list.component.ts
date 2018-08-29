import { Component, OnInit } from '@angular/core';
import { Producto } from '../models/producto.interface';
import { ProductoService } from '../services/producto.service';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css']
})
export class ProductoListComponent implements OnInit {

  listarProductos:Producto[];

  campoBusqueda:string="hola como estas";
  constructor(private productoService:ProductoService) {

   }

  buscar(){
    this.campoBusqueda="nueva busqueda";
  }

  ngOnInit() {
    let observador:Observer<Producto[]>={
        next: (data) => {
          console.log(data)
          this.listarProductos=data;
        },
        error: (error) => {
          console.log('se produjo el siguiente error al repuerar la lista de productos');
        },
        complete: () => {
          console.log('proceso finalizado');
        }
    };
    this.productoService.getProductos()
    .subscribe(observador);
  }

}
