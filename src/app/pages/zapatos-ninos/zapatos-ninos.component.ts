import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Productos } from 'src/app/data/data.products';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-zapatos-ninos',
  templateUrl: './zapatos-ninos.component.html',
  styleUrls: ['./zapatos-ninos.component.scss']
})
export class ZapatosNinosComponent {
  productsArray = Productos.filter(product => product.categories.includes("niño"));
  titlePage = 'Adidas | Zapatos para Niños';
  constructor(private titleService: Title, private productosService: ProductosService) {
    this.titleService.setTitle(this.titlePage);
  }
  orderByPrice(data:any): void {
    let order = data.target.value;
    this.productsArray = this.productosService.sortByPrice(this.productsArray, order);
  }
}
