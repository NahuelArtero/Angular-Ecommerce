import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom, map } from 'rxjs';
import { Product, ResponseDetailDescription, ResponseProducts } from '../interfaces/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

    getAllProducts():Promise<Product[]>{
     return lastValueFrom(this.http.get<ResponseProducts>("https://api.mercadolibre.com/sites/MLA/search?q=ipod")
     .pipe(map((response:ResponseProducts)=>response.results)))
    }

    getById(id:string):Promise<Product>{
      return lastValueFrom(this.http.get<Product>(`https://api.mercadolibre.com/items/${id}`))
    }

    getByIdDescription(id:string):Promise<string>{
      return lastValueFrom(this.http.get<ResponseDetailDescription>(`https://api.mercadolibre.com/items/${id}/description`).pipe(map((response:ResponseDetailDescription)=>response.plain_text)))
    }
}
