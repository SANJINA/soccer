import { Component } from '@angular/core';

import { QuoteService } from './services/quote/quote.services';
import { CompetitionsService } from './services/competitions/competitions.services';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers: [ QuoteService, CompetitionsService ],
  styleUrls: ['app.component.css'],
})
export class AppComponent  {}
