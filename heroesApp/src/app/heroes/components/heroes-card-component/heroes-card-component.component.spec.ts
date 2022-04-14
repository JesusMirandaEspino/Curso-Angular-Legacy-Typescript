import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesCardComponentComponent } from './heroes-card-component.component';

describe('HeroesCardComponentComponent', () => {
  let component: HeroesCardComponentComponent;
  let fixture: ComponentFixture<HeroesCardComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroesCardComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesCardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
