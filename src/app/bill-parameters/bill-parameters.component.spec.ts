import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillParametersComponent } from './bill-parameters.component';

describe('BillParametersComponent', () => {
  let component: BillParametersComponent;
  let fixture: ComponentFixture<BillParametersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillParametersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillParametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
