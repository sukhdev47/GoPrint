import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RateexperienceComponent } from './rate-experience.component';

describe('RateExperienceComponent', () => {
  let component: RateexperienceComponent;
  let fixture: ComponentFixture<RateexperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RateexperienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RateexperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
