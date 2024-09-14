import { Component } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  shoppingCart: boolean = false;
  responsiveMenu: boolean = true;
  counterItemsCar: number = 0;
  constructor(private ProductosService: ProductosService) { }
  ngOnInit(): void {
    this.responsiveMenu = false;
    this.ProductosService.updateShoppingCart$.subscribe((products) => {
      this.counterItemsCar = products.reduce((total, product) => total + product.cantidad, 0);
    });
  }

  showMenu() {
    this.responsiveMenu = !this.responsiveMenu;
    document.body.style.overflow = this.responsiveMenu ? 'hidden' : 'auto';
  }
  showCart() {
    this.shoppingCart = !this.shoppingCart;
  }
  restartMenu() {
    this.responsiveMenu = false;
    document.body.style.overflow = 'auto'
  }
}
