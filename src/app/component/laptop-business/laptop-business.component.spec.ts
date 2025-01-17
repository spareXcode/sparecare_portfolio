import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopBusinessComponent } from './laptop-business.component';
import { TableModule } from 'primeng/table';

describe('LaptopBusinessComponent', () => {
  let component: LaptopBusinessComponent;
  let fixture: ComponentFixture<LaptopBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaptopBusinessComponent,TableModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaptopBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
