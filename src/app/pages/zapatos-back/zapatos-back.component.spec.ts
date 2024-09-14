import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZapatosBackComponent } from './zapatos-back.component';

describe('ZapatosBackComponent', () => {
  let component: ZapatosBackComponent;
  let fixture: ComponentFixture<ZapatosBackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZapatosBackComponent]
    });
    fixture = TestBed.createComponent(ZapatosBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
