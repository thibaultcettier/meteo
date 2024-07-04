import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FranceWeatherComponent } from './france-weather.component';

describe('FranceWeatherComponent', () => {
  let component: FranceWeatherComponent;
  let fixture: ComponentFixture<FranceWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FranceWeatherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FranceWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
