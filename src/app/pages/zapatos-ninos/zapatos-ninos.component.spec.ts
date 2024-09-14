import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZapatosNinosComponent } from './zapatos-ninos.component';

describe('ZapatosNinosComponent', () => {
  let component: ZapatosNinosComponent;
  let fixture: ComponentFixture<ZapatosNinosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZapatosNinosComponent]
    });
    fixture = TestBed.createComponent(ZapatosNinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
