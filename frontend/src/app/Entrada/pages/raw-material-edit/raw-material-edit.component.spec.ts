import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RawMaterialEditComponent } from './raw-material-edit.component';

describe('RawMaterialEditComponent', () => {
  let component: RawMaterialEditComponent;
  let fixture: ComponentFixture<RawMaterialEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RawMaterialEditComponent]
    });
    fixture = TestBed.createComponent(RawMaterialEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
