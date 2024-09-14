import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZapatosMujerComponent } from './pages/zapatos-mujer/zapatos-mujer.component';
import { ZapatosHombreComponent } from './pages/zapatos-hombre/zapatos-hombre.component';
import { ZapatosNinosComponent } from './pages/zapatos-ninos/zapatos-ninos.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { CarritoComprasComponent } from './pages/carrito-compras/carrito-compras.component';
import { HomeComponent } from './pages/home/home.component';
import { ZapatosBackComponent } from './pages/zapatos-back/zapatos-back.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: 'carrito', component: CarritoComprasComponent },
  { path: 'zapatos-mujer', component: ZapatosMujerComponent },
  { path: 'zapatos-hombre', component: ZapatosHombreComponent },
  { path: 'zapatos-ninos', component: ZapatosNinosComponent },
  { path: 'zapatosback', component: ZapatosBackComponent },
  { path: 'zapatos/:id', component: ProductPageComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
