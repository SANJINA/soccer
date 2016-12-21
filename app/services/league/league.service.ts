import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
//import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

import { Config } from '../config';

@Injectable()
export class LeagueService {
  private apiToken: string;
  private url: string;

  constructor(private _http: Http) {
    this.apiToken = Config.FOOTBALL_DATA_APITOKEN;
    this.url = Config.FOOTBALL_DATA_BASEURL + '/competitions/';
    //console.log('CompetitionsService Initialized...' + this.url);
  }

  getLeagueTable(leagueId: number) {
    //console.log('competitions service url: ' + this.url);

    let headers = new Headers({ 'Accept': 'application/json' });
    headers.append('X-Auth-Token', this.apiToken);

    let options = new RequestOptions({ headers: headers });

    return this._http
      .get(this.url + leagueId + '/leagueTable', options)
      .map((response: Response) => response.json())
      //.do(data => console.log('All: ' +  JSON.stringify(data)))
      .catch(this.handleError);
  }

  private handleError (error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error getting the quote..');
  }
}
