import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MatchesLeaguePage } from './matches-league.page';

const routes: Routes = [
  {
    path: '',
    component: MatchesLeaguePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MatchesLeaguePageRoutingModule {}
