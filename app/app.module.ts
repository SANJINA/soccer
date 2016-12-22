import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';

import { routing } from './app.routing';

import { AppComponent }  from './app.component';

import { CompetitionsComponent } from './components/competitions/competitions.component';
import { FavoriteTeamsComponent } from './components/favorite_teams/favorite_teams.component';
import { LeagueComponent } from './components/league/league.component';
import { TeamComponent } from './components/team/team.component';

import { QuoteComponent } from './components/shared/quote/quote.component';

import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';

import { PageNotFoundComponent } from './components/shared/pageNotFound/pageNotFound.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    routing
  ],
  declarations: [
    AppComponent,
    CompetitionsComponent,
    QuoteComponent,
    HeaderComponent,
    FooterComponent,
    FavoriteTeamsComponent,
    LeagueComponent,
    PageNotFoundComponent,
    TeamComponent
  ],
  bootstrap:    [ AppComponent ],
  providers: [],
})
export class AppModule { }
