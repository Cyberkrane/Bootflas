import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RawMaterialStockComponent } from './raw-material-stock.component';

describe('RawMaterialStockComponent', () => {
  let component: RawMaterialStockComponent;
  let fixture: ComponentFixture<RawMaterialStockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RawMaterialStockComponent]
    });
    fixture = TestBed.createComponent(RawMaterialStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
