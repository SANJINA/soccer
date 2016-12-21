import { Component, OnInit } from '@angular/core';

import { CompetitionsService } from '../../services/competitions/competitions.services';

@Component({
  moduleId: module.id,
  selector: 'competitions',
  templateUrl: 'competitions.component.html',
})
export class CompetitionsComponent implements OnInit {
  competitions: any[];

  constructor(private _competitionsService: CompetitionsService) {
    this.competitions = [];
  }

  ngOnInit(): void {
    this._competitionsService.getCompetitions().subscribe(res => {
      console.log('What we got from competitions service', res);
      this.competitions = res;
    });
  }
}
