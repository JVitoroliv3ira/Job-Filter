import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { OpportunitiesModule } from './pages/opportunities/opportunities.module';
import { CompaniesModule } from './pages/companies/companies.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    OpportunitiesModule,
    CompaniesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
