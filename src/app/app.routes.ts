import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'current-weather', pathMatch: 'full' },
  {
    path: 'current-weather',
    loadComponent: () =>
      import('./components/current-weather/current-weather.component').then(
        (c) => c.CurrentWeatherComponent
      ),
      title: 'current-weather'
  },
  {
    path: 'weather-history',
    loadComponent: () =>
      import('./components/weather-history/weather-history.component').then(
        (c) => c.WeatherHistoryComponent
      ),
      title: 'weather-history'
  },
  {
    path: 'france-weather',
    loadComponent: () =>
      import('./components/france-weather/france-weather.component').then(
        (c) => c.FranceWeatherComponent
      ),
      title: 'france-weather'
  }
];
