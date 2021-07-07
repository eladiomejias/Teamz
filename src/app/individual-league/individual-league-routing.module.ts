import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndividualLeaguePage } from './individual-league.page';

const routes: Routes = [
  {
    path: '',
    component: IndividualLeaguePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndividualLeaguePageRoutingModule {}
