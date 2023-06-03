import { NgModule } from '@angular/core';
import { OpportunitiesListComponent } from './opportunities-list/opportunities-list.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
    OpportunitiesListComponent
  ],
  exports: [
    OpportunitiesListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class OpportunitiesModule { }