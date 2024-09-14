import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZapatosMujerComponent } from './zapatos-mujer.component';

describe('ZapatosMujerComponent', () => {
  let component: ZapatosMujerComponent;
  let fixture: ComponentFixture<ZapatosMujerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZapatosMujerComponent]
    });
    fixture = TestBed.createComponent(ZapatosMujerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
