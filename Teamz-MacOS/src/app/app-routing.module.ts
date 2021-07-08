import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'individual-league/:id',
    loadChildren: () => import('./individual-league/individual-league.module').then( m => m.IndividualLeaguePageModule)
  },
  {
    path: 'team',
    loadChildren: () => import('./team/team.module').then( m => m.TeamPageModule)
  },
  {
    path: 'matches-league',
    loadChildren: () => import('./matches-league/matches-league.module').then( m => m.MatchesLeaguePageModule)
  },
  {
    path: 'match-stats',
    loadChildren: () => import('./match-stats/match-stats.module').then( m => m.MatchStatsPageModule)
  },
  {
    path: 'top-scorers',
    loadChildren: () => import('./top-scorers/top-scorers.module').then( m => m.TopScorersPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
