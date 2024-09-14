import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment/environment';
import { Product } from '../models/Product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoshttpService {

  constructor(
    private http: HttpClient
  ) { }
  getAllProducts() {
    return this.http.get<Product[]>(environment.backURL + 'productos')
  }
}

