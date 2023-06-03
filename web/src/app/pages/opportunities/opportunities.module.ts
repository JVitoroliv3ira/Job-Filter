import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OpportunitiesRoutingModule } from './opportunities-routing.module';
import { OpportunitiesListComponent } from './opportunities-list/opportunities-list.component';

@NgModule({
  declarations: [
    OpportunitiesListComponent
  ],
  imports: [
    CommonModule,
    OpportunitiesRoutingModule
  ]
})
export class OpportunitiesModule { }