import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVendorDetailsComponent } from './update-vendor-details.component';

describe('UpdateVendorDetailsComponent', () => {
  let component: UpdateVendorDetailsComponent;
  let fixture: ComponentFixture<UpdateVendorDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateVendorDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateVendorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
