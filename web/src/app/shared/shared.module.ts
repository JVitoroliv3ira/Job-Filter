import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DefaultLayoutComponent } from './components/default-layout/default-layout.component';
import { OpportunitiesFilterComponent } from './components/opportunities-filter/opportunities-filter.component';


@NgModule({
  declarations: [
    DefaultLayoutComponent,
    OpportunitiesFilterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DefaultLayoutComponent,
    OpportunitiesFilterComponent
  ]
})
export class SharedModule { }