import { Component, OnInit } from '@angular/core';

import { FavoriteTeamsService } from '../../services/favorite_teams/favorite_teams.services';
import { TeamService } from '../../services/team/team.services';

@Component({
  moduleId: module.id,
  selector: 'favorite-teams',
  templateUrl: 'favorite_teams.component.html',
  styleUrls: ['favorite_teams.component.css'],
})
export class FavoriteTeamsComponent implements OnInit {
  favoriteTeams: Array<number>;
  teamsInfo: { id: number, name: string, crestUrl: string}[];

  constructor(private _favoriteTeamsService: FavoriteTeamsService, private _teamService: TeamService) {
    this.favoriteTeams = [];
    this.teamsInfo = [];
  }

  ngOnInit(): void {
    let favTeams = this._favoriteTeamsService.getFavoriteTeams();

    favTeams.forEach(teamId => {
      this._teamService.getTeam(teamId).subscribe(res => {
        let teamInfo = {
          id: teamId,
          name: res.name,
          crestUrl: res.crestUrl
        };
        this.teamsInfo.push(teamInfo);
        //console.log('From Team Service ' + JSON.stringify(res) + res.crestUrl);
      });
    });
  }
}
