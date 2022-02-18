import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BycapitalComponent } from './bycapital.component';

describe('BycapitalComponent', () => {
  let component: BycapitalComponent;
  let fixture: ComponentFixture<BycapitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BycapitalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BycapitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
