import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuestraNombresComponent } from './muestra-nombres.component';

describe('MuestraNombresComponent', () => {
  let component: MuestraNombresComponent;
  let fixture: ComponentFixture<MuestraNombresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuestraNombresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuestraNombresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
