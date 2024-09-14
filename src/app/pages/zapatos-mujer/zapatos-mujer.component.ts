import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Productos } from 'src/app/data/data.products';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-zapatos-mujer',
  templateUrl: './zapatos-mujer.component.html',
  styleUrls: ['./zapatos-mujer.component.scss']
})
export class ZapatosMujerComponent {
  titlePage = 'Adidas | Zapatos para Mujer';
  productsArray = Productos.filter(product => product.categories.includes("mujer"));
  constructor(private titleService: Title, private productosService: ProductosService) {
    this.titleService.setTitle(this.titlePage);
  }
  orderByPrice(data:any): void {
    let order = data.target.value;
    this.productsArray = this.productosService.sortByPrice(this.productsArray, order);
  }
}
