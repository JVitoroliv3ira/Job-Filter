import { NgModule } from '@angular/core';
import { OpportunitiesListComponent } from './opportunities-list/opportunities-list.component';
import { CommonModule } from '@angular/common';
import { OpportunitiesRoutingModule } from './opportunities-routing.module';

@NgModule({
  declarations: [
    OpportunitiesListComponent
  ],
  exports: [
    OpportunitiesListComponent
  ],
  imports: [
    CommonModule,
    OpportunitiesRoutingModule
  ]
})
export class OpportunitiesModule { }