import { Injectable } from '@angular/core';
/* Modelos */
import { Product } from '../models/Product.model';
/* Data */
import { Productos } from '../data/data.products';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  PRODUCTS_DATA: Product[] = Productos;
  SHOPPING_CART: Product[] = [];
  private _updateShoppingCart = new BehaviorSubject<Product[]>([]);
  updateShoppingCart$ = this._updateShoppingCart.asObservable();

  getAllProducts(): Product[] {
    return this.PRODUCTS_DATA;
  }
  // Funcion para obtener un producto por su id
  getProductById(id: string): Product | undefined  {
    console.log(this.PRODUCTS_DATA);
    return this.PRODUCTS_DATA.find(product => product.id === id);
  }

  filterByCategory(category: string): Product[] {
    return this.PRODUCTS_DATA.filter(product => product.categories.includes(category));
  }
  addToCarById(id:string): void {
    const product = this.PRODUCTS_DATA.find(product => product.id === id);
    if (product) {
      if (this.SHOPPING_CART.includes(product)) {
        product.cantidad++;
      } else {
        this.SHOPPING_CART.push(product);
      }
    }
    this._updateShoppingCart.next(this.SHOPPING_CART);
  }


  totalShoppingCart(): number {
    return this.SHOPPING_CART.reduce((total, product) => total + (product.price * product.cantidad), 0);
  }

  countCantCart(): number {
    return this.SHOPPING_CART.reduce((total, product) => total + product.cantidad, 0);
  }

  sortByPrice(datos:Product[], order: string): Product[] {
    if (order === 'asc') {
      return datos.sort((a, b) => a.price - b.price);
    } else if (order === 'desc') {
      return datos.sort((a, b) => b.price - a.price);
    } else {
      return datos;
    }
  }

  deleteProductCart(id: string): void {
    const product = this.SHOPPING_CART.find(product => product.id === id);
    if (product) {
      const index = this.SHOPPING_CART.indexOf(product);
      this.SHOPPING_CART.splice(index, 1);
    }
    this._updateShoppingCart.next(this.SHOPPING_CART);
  }
}

