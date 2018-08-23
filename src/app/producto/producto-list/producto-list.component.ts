import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css']
})
export class ProductoListComponent implements OnInit {

  listarProductos=[];

  campoBusqueda:string="hola como estas";
  constructor() {

   }

  buscar(){
    this.campoBusqueda="nueva busqueda";
  }

  ngOnInit() {
    this.listarProductos=[{
      nombre:"coca",
      precio:20,
      stock:10,
      cantidad:5,
      marca:"coca"
    },{
      nombre:"coca cola",
      precio:20,
      stock:50,
      cantidad:10,
      marca:"coca"
    },{
      nombre:"fanta",
      precio:20,
      stock:10,
      cantidad:5,
      marca:"coca"
    }];
  }

}
