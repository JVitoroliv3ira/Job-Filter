import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OpportunitiesRoutingModule } from './opportunities-routing.module';
import { OpportunitiesListComponent } from './opportunities-list/opportunities-list.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    OpportunitiesListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    OpportunitiesRoutingModule
  ]
})
export class OpportunitiesModule { }