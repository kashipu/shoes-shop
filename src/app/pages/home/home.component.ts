import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  titlePage = 'Adidas | Tienda no oficial';
  constructor(private titleService: Title) {
    this.titleService.setTitle(this.titlePage);
  }
}
