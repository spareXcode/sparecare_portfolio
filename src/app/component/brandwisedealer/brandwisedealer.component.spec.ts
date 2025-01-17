import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandwisedealerComponent } from './brandwisedealer.component';

describe('BrandwisedealerComponent', () => {
  let component: BrandwisedealerComponent;
  let fixture: ComponentFixture<BrandwisedealerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandwisedealerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandwisedealerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
