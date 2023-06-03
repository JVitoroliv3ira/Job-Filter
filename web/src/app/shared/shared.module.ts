import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

import { DefaultLayoutComponent } from './components/default-layout/default-layout.component';
import { OpportunitiesFilterComponent } from './components/opportunities-filter/opportunities-filter.component';


@NgModule({
  declarations: [
    DefaultLayoutComponent,
    OpportunitiesFilterComponent
  ],
  imports: [
    CommonModule,
    NgSelectModule,
    FormsModule
  ],
  exports: [
    DefaultLayoutComponent,
    OpportunitiesFilterComponent
  ]
})
export class SharedModule { }