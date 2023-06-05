import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { CompaniesListComponent } from './companies-list/companies-list.component';
import { CompaniesRoutingModule } from './companies-routing.module';

@NgModule({
    declarations: [
    CompaniesListComponent
  ],
    imports: [
        CommonModule,
        SharedModule,
        CompaniesRoutingModule
    ]
})
export class CompaniesModule { }