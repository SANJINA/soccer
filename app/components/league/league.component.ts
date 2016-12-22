import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { LeagueService } from '../../services/league/league.service';

@Component({
  moduleId: module.id,
  selector: 'league',
  templateUrl: 'league.component.html'
})
export class LeagueComponent implements OnInit {
  leagueName: string;
  leagueId: number;
  standing: any[];

  constructor(private _route: ActivatedRoute, private _leagueService: LeagueService) {
    //console.log('The activted route is ' + this._route.snapshot.params['id']);
    this.leagueId = this._route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this._leagueService.getLeagueTable(this.leagueId).subscribe(res => {
      //console.log('What we got from league service', res);
      this.standing = res.standing;
      this.leagueName = res.leagueCaption;

      //add team id to each team in standing
      this.standing.forEach(team => {
      let ind: number = (team['_links'].team.href).lastIndexOf('/');
        let teamId: string = (team['_links'].team.href).slice(ind + 1);
        //console.log('The team id is ' + teamId);
        team.teamId = teamId;
      });
    });
  }
}
