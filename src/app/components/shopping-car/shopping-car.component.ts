import { Component } from '@angular/core';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-shopping-car',
  templateUrl: './shopping-car.component.html',
  styleUrls: ['./shopping-car.component.scss']
})
export class ShoppingCarComponent {
  cart = this.ProductosService.SHOPPING_CART;
  constructor(private ProductosService: ProductosService) {}
  totalShoppingCart(): number {
    return this.ProductosService.totalShoppingCart();
  }
}
