import { Injectable } from '@angular/core';
import { Producto } from '../models/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor() { }

  getProductos():Producto[]{
    return [];
  }

  getProducto(id:number):Producto{
    return null;
  }

  createProducto(productoToCreate:Producto):Producto{
    return null;
  }

  updateProducto(id:number,productoToUpdate:Producto):Producto{
    return null;
  }

  deleteProducto(id:number):Producto{
    return null;
  }
}
