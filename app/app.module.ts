import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent }  from './app.component';

import { CompetitionsComponent } from './components/competitions/competitions.component';
import { FavoriteTeamsComponent } from './components/favorite_teams/favorite_teams.component';

import { QuoteComponent } from './components/shared/quote/quote.component';

import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule
  ],
  declarations: [
    AppComponent,
    CompetitionsComponent,
    QuoteComponent,
    HeaderComponent,
    FooterComponent,
    FavoriteTeamsComponent
  ],
  bootstrap:    [ AppComponent ],
  providers: [],
})
export class AppModule { }
