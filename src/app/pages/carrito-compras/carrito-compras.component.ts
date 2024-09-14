import { Component } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrls: ['./carrito-compras.component.scss']
})
export class CarritoComprasComponent {
  allProducts = this.productosService.SHOPPING_CART;
  constructor(private productosService: ProductosService) {
  }
  totalShoppingCart(): number {
    return this.productosService.totalShoppingCart();
  }
}
