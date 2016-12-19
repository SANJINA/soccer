import { Component, OnInit } from '@angular/core';

import { FavoriteTeamsService } from '../../services/favorite_teams/favorite_teams.services';
import { TeamService } from '../../services/team/team.services';

@Component({
  moduleId: module.id,
  selector: 'favorite-teams',
  templateUrl: 'favorite_teams.component.html',
})
export class FavoriteTeamsComponent implements OnInit {
  favoriteTeams: Array<number>;

  constructor(private _favoriteTeamsService: FavoriteTeamsService, private _teamService: TeamService) {
    this.favoriteTeams = [];
  }

  ngOnInit(): void {
    let favTeams = this._favoriteTeamsService.getFavoriteTeams();

    favTeams.forEach(team => {
      this._teamService.getTeam(team).subscribe(res => {
        console.log('From Team Service ' + JSON.stringify(res) + res.name);
      });
    });
  }
}
