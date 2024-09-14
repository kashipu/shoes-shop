import { Component, Input } from '@angular/core';
import { Product } from '../../models/Product.model';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.scss']
})
export class ProductCartComponent {
  dataInit:Product = {
    id: '',
    name: '',
    price: 0,
    discount: 0,
    description: '',
    image: '',
    categories: [],
    tags: [],
    calification: 0,
    cantidad: 0,
    stock: 0
  };
  @Input() product: Product = this.dataInit;
  constructor(private productosService: ProductosService) {
  }
  deleteProductCart() {
    this.productosService.deleteProductCart(this.product.id);
  }
  addCantidad() {
    this.product.cantidad++;
  }
  removeCantidad() {
    if (this.product.cantidad > 1) {
      this.product.cantidad--;
    }
  }
}
