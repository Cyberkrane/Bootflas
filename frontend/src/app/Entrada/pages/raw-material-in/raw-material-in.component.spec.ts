import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RawMaterialInComponent } from './raw-material-in.component';

describe('RawMaterialInComponent', () => {
  let component: RawMaterialInComponent;
  let fixture: ComponentFixture<RawMaterialInComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RawMaterialInComponent]
    });
    fixture = TestBed.createComponent(RawMaterialInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
