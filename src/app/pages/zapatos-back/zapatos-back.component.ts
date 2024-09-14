import { Component } from '@angular/core';
import { ProductoshttpService } from 'src/app/services/productoshttp.service';

@Component({
  selector: 'app-zapatos-back',
  templateUrl: './zapatos-back.component.html',
  styleUrls: ['./zapatos-back.component.scss']
})
export class ZapatosBackComponent {
  productoHttp = []
  constructor(private productosHttp: ProductoshttpService) {
    this.productosHttp.getAllProducts().subscribe((data: any) => {
      this.productoHttp = data;
      console.log(this.productoHttp)
    })
   }
}
