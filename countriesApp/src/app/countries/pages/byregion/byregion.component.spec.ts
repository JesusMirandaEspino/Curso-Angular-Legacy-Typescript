import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByregionComponent } from './byregion.component';

describe('ByregionComponent', () => {
  let component: ByregionComponent;
  let fixture: ComponentFixture<ByregionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByregionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ByregionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
