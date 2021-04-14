import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorsNearbyComponent } from './vendors-nearby.component';

describe('VendorsNearbyComponent', () => {
  let component: VendorsNearbyComponent;
  let fixture: ComponentFixture<VendorsNearbyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorsNearbyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorsNearbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
