import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
//import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

import { Config } from '../config';

@Injectable()
export class TeamService {
  private apiToken: string;
  private url: string;
  private teamId: number;

  constructor(private _http: Http) {
    this.apiToken = Config.FOOTBALL_DATA_APITOKEN;
    this.url = Config.FOOTBALL_DATA_BASEURL + '/teams/';
    //console.log('CompetitionsService Initialized...' + this.url);
  }

  getTeam(teamId: number) {
    this.teamId = teamId;

    let headers = new Headers({ 'Accept': 'application/json' });
    headers.append('X-Auth-Token', this.apiToken);

    let options = new RequestOptions({ headers: headers });

    //console.log('url for team service ' + this.url + this.teamId);

    return this._http
      .get(this.url + this.teamId, options)
      .map((response: Response) => response.json())
      //.do(data => console.log('All: ' +  JSON.stringify(data)))
      .catch(this.handleError);
  }

  private handleError (error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error getting the quote..');
  }
}
