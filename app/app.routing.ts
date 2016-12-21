import { Routes, RouterModule } from '@angular/router';

import { FavoriteTeamsComponent } from './components/favorite_teams/favorite_teams.component';
import { CompetitionsComponent } from './components/competitions/competitions.component';
import { PageNotFoundComponent } from './components/shared/pageNotFound/pageNotFound.component';

const APP_ROUTES: Routes = [
  {
    path: 'favoriteTeams',
    component: FavoriteTeamsComponent
  },
  {
    path: 'competitions',
    component: CompetitionsComponent
  },
  {
    path: '',
    redirectTo: 'favoriteTeams',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

export const routing = RouterModule.forRoot(APP_ROUTES, { useHash: false });
