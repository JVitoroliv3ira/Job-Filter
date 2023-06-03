import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpportunitiesListComponent } from './opportunities-list/opportunities-list.component';

const routes: Routes = [
    {
        path: '',
        title: 'JF | Opportunities',
        component: OpportunitiesListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OpportunitiesRoutingModule { }