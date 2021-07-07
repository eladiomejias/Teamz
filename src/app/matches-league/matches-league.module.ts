import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MatchesLeaguePageRoutingModule } from './matches-league-routing.module';

import { MatchesLeaguePage } from './matches-league.page';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatchesLeaguePageRoutingModule,
    NgxDatatableModule
  ],
  declarations: [MatchesLeaguePage]
})
export class MatchesLeaguePageModule {}
