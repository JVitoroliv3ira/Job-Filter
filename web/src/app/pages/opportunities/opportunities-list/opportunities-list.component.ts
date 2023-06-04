import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { OpportunityFilterDTO } from 'src/app/api/dtos/opportunity-filter.dto';
import { OpportunitiesService } from 'src/app/api/services/opportunities.service';

@Component({
  selector: 'app-opportunities-list',
  templateUrl: './opportunities-list.component.html',
  styleUrls: ['./opportunities-list.component.scss']
})
export class OpportunitiesListComponent implements OnInit {
  public filter = { pageNumber: 0, pageSize: 15 } as OpportunityFilterDTO;

  constructor(private opportunitiesService: OpportunitiesService) {}

  ngOnInit(): void {
    this.searchOpportunities();
  }

  public handleFilterEvent(filter: OpportunityFilterDTO): void {
    this.filter.name = filter.name;
    this.filter.description = filter.description;
    this.filter.companyName = filter.companyName;
    this.filter.salary = filter.salary;
    this.filter.type = filter.type;
    this.filter.tag = filter.tag;

    this.searchOpportunities();
  }

  private searchOpportunities(): void {
    this.opportunitiesService
      .searchOpportunities(this.filter)
      .pipe(take(1))
      .subscribe(res => console.log(res));
  }
}
