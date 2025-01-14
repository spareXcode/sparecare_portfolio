import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessIntelComponent } from './business-intel.component';

describe('BusinessIntelComponent', () => {
  let component: BusinessIntelComponent;
  let fixture: ComponentFixture<BusinessIntelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessIntelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessIntelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
