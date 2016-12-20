import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
//import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class FavoriteTeamsService {
  private teams: Array<number>;

  constructor(private _http: Http) {
    this.teams = [5, 86, 61];
  }

  getFavoriteTeams() {
    return this.teams;
  }
}
