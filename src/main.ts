import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { importProvidersFrom } from '@angular/core';
import { HeaderComponent } from './app/assets/header/header.component';
import { FooterComponent } from './app/assets/footer/footer.component';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  bootstrapApplication(AppComponent, {
    providers: [
      importProvidersFrom(BrowserModule),
      HeaderComponent,
      FooterComponent
    ]
  }).catch(err => console.error(err));
