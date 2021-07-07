import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopScorersPage } from './top-scorers.page';

const routes: Routes = [
  {
    path: '',
    component: TopScorersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TopScorersPageRoutingModule {}
