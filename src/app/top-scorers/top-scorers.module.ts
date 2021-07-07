import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TopScorersPageRoutingModule } from './top-scorers-routing.module';

import { TopScorersPage } from './top-scorers.page';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TopScorersPageRoutingModule,
    NgxDatatableModule
  ],
  declarations: [TopScorersPage]
})
export class TopScorersPageModule {}
