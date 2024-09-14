import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-zapatos-hombre',
  templateUrl: './zapatos-hombre.component.html',
  styleUrls: ['./zapatos-hombre.component.scss']
})
export class ZapatosHombreComponent {
  /* Mostrar datos por categoría */
  productsArray = this.productosService.filterByCategory("hombre");
  /* Modificar el title de la página */
  titlePage = 'Adidas | Zapatos para Hombre';
  constructor(private titleService: Title, private productosService: ProductosService) {
    this.titleService.setTitle(this.titlePage);
  }
  orderByPrice(data:any): void {
    let order = data.target.value;
    this.productsArray = this.productosService.sortByPrice(this.productsArray, order);
  }
}
