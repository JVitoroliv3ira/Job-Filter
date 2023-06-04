import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { CurrencyMaskModule } from "ng2-currency-mask";

import { DefaultLayoutComponent } from './components/default-layout/default-layout.component';
import { OpportunitiesFilterComponent } from './components/opportunities-filter/opportunities-filter.component';
import { OpportunitiesFeedComponent } from './components/opportunities-feed/opportunities-feed.component';
import { OpportunityCardComponent } from './components/opportunity-card/opportunity-card.component';


@NgModule({
  declarations: [
    DefaultLayoutComponent,
    OpportunitiesFilterComponent,
    OpportunitiesFeedComponent,
    OpportunityCardComponent
  ],
  imports: [
    CommonModule,
    NgSelectModule,
    FormsModule,
    CurrencyMaskModule
  ],
  exports: [
    DefaultLayoutComponent,
    OpportunitiesFilterComponent,
    OpportunitiesFeedComponent
  ]
})
export class SharedModule { }