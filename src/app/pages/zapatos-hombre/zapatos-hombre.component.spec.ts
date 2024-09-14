import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZapatosHombreComponent } from './zapatos-hombre.component';

describe('ZapatosHombreComponent', () => {
  let component: ZapatosHombreComponent;
  let fixture: ComponentFixture<ZapatosHombreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZapatosHombreComponent]
    });
    fixture = TestBed.createComponent(ZapatosHombreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
