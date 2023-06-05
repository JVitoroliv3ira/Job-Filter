import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'opportunities',
    loadChildren: () => import('./pages/opportunities/opportunities.module').then(module => module.OpportunitiesModule)
  },
  {
    path: 'companies',
    loadChildren: () => import('./pages/companies/companies.module').then(module => module.CompaniesModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'opportunities'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
