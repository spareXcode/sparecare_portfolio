import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileandTabViewComponent } from './mobileand-tab-view.component';

describe('MobileandTabViewComponent', () => {
  let component: MobileandTabViewComponent;
  let fixture: ComponentFixture<MobileandTabViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileandTabViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileandTabViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
