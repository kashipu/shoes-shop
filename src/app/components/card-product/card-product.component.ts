import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/Product.model';
import { ProductosService } from '../../services/productos.service';


@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss']
})
export class CardProductComponent {
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
  @Input() productInfo: Product = this.dataInit;
  constructor(private ProductosService: ProductosService) {
   }
    addToCart(id:string): void {
      this.ProductosService.addToCarById(id);
    }
}
