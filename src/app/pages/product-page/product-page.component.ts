import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/Product.model';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  producto: Product | undefined;
  constructor(private route: ActivatedRoute, private service: ProductosService) {

  }
  ngOnInit(): void {
    // Obtener el id de la ruta del navegador
    const idPage = this.route.snapshot.paramMap.get('id');
    console.log(idPage);
    this.producto = this.service.getProductById(idPage ?? '');
    console.log(this.producto);
  }
  addToCart(id:string): void {
    this.service.addToCarById(id);
    console.log(this.service.SHOPPING_CART)
  }

}
