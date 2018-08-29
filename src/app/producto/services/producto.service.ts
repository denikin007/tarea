import { Injectable } from '@angular/core';
import { Producto } from '../models/producto.interface';
import { PRODUCTOS } from '../mocks/producto.mocks';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const API_URL='http://cursoangular.hosting.cs.umss.edu.bo/api/productos';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private httpClient:HttpClient) { }

  getProductos():Observable<Producto[]>{

    // return Observable.create(
    //   // (observer)=>{
    //   //   // observer.next(PRODUCTOS);
    //   //   setTimeout(()=>{
    //   //     observer.next(PRODUCTOS);
    //   //     observer.complete();
    //   //   },5000);
    //   //   // observer.complete();

        
    //   }
    // );
    return this.httpClient.get<Producto[]>(API_URL);
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
