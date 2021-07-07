import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndividualLeaguePageRoutingModule } from './individual-league-routing.module';

import { IndividualLeaguePage } from './individual-league.page';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndividualLeaguePageRoutingModule,
    NgxDatatableModule
  ],
  declarations: [IndividualLeaguePage]
})
export class IndividualLeaguePageModule {}
