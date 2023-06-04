import { Component } from '@angular/core';
import { OpportunityFilterDTO } from 'src/app/api/dtos/opportunity-filter.dto';

@Component({
  selector: 'app-opportunities-list',
  templateUrl: './opportunities-list.component.html',
  styleUrls: ['./opportunities-list.component.scss']
})
export class OpportunitiesListComponent {
  public handleFilter(filter: OpportunityFilterDTO): void {
    console.log(filter)
  }
}
