import { Component } from '@angular/core';

import { QuoteService } from './services/quote/quote.services';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers: [ QuoteService ],
})
export class AppComponent  {}
