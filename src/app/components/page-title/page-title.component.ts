import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.scss']
})
export class PageTitleComponent {
  selectOption: string = '';
  @Input() titlePage: string = 'Zapatos';
  @Input() subtitlePage: string = 'Zapatos para toda la familia';
  selectOrderBy() {
    console.log(this.selectOption);
  }
}
