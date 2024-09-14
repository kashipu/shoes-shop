import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TopAlertComponent } from './components/top-alert/top-alert.component';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { CardProductComponent } from './components/card-product/card-product.component';
import { ZapatosMujerComponent } from './pages/zapatos-mujer/zapatos-mujer.component';
import { ZapatosHombreComponent } from './pages/zapatos-hombre/zapatos-hombre.component';
import { ZapatosNinosComponent } from './pages/zapatos-ninos/zapatos-ninos.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { SubheaderComponent } from './components/subheader/subheader.component';
import { HeaderOptionsComponent } from './components/header-options/header-options.component';
import { FooterComponent } from './components/footer/footer.component';
import { ShoppingCarComponent } from './components/shopping-car/shopping-car.component';
import { CarritoComprasComponent } from './pages/carrito-compras/carrito-compras.component';
import { ProductCartComponent } from './components/product-cart/product-cart.component';
import { HomeComponent } from './pages/home/home.component';
import { ZapatosBackComponent } from './pages/zapatos-back/zapatos-back.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopAlertComponent,
    PageTitleComponent,
    CardProductComponent,
    ZapatosMujerComponent,
    ZapatosHombreComponent,
    ZapatosNinosComponent,
    ProductPageComponent,
    SubheaderComponent,
    HeaderOptionsComponent,
    FooterComponent,
    ShoppingCarComponent,
    CarritoComprasComponent,
    ProductCartComponent,
    HomeComponent,
    ZapatosBackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
