import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './assets/header/header.component'
import { FooterComponent } from './assets/footer/footer.component';

@NgModule({
  imports: [
    BrowserModule,
    HeaderComponent,
    FooterComponent
  ],
  providers: [],
})
export class AppModule { }