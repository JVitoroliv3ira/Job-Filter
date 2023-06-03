import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'opportunities',
    loadChildren: () => import('./pages/opportunities/opportunities.module').then(module => module.OpportunitiesModule)
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
