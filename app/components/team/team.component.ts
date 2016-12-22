import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TeamService } from '../../services/team/team.services';

@Component({
  moduleId: module.id,
  selector: 'team',
  templateUrl: 'team.component.html'
})
export class TeamComponent implements OnInit {
  teamsInfo: { id: number, name: string, crestUrl: string}[];
  teamId: number;

  constructor(private _teamService: TeamService, private _route: ActivatedRoute) {
    this.teamId = this._route.snapshot.params['id'];
    console.log('Team ID from Team Component ' + this.teamId);
  }

  ngOnInit(): void {
    this._teamService.getTeam(this.teamId).subscribe(res => {
      let teamInfo = {
          id: this.teamId,
          name: res.name,
          crestUrl: res.crestUrl
        };
      console.log('Team info from Team COmponent ' + JSON.stringify(teamInfo));
    });
  }
}
