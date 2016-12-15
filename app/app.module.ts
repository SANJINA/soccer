import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

import { QuoteComponent } from './components/shared/quote/quote.component';

import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [
    AppComponent,
    QuoteComponent,
    HeaderComponent,
    FooterComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
