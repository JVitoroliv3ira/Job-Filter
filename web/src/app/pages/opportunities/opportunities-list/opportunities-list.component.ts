import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { OpportunityFilterDTO } from 'src/app/api/dtos/opportunity-filter.dto';
import { PaginatedResultDTO } from 'src/app/api/dtos/paginated-result.dto';
import { Opportunity } from 'src/app/api/models/opportunity';
import { OpportunitiesService } from 'src/app/api/services/opportunities.service';

@Component({
  selector: 'app-opportunities-list',
  templateUrl: './opportunities-list.component.html',
  styleUrls: ['./opportunities-list.component.scss']
})
export class OpportunitiesListComponent implements OnInit {
  public filter = { pageNumber: 0, pageSize: 7 } as OpportunityFilterDTO;
  public loadingSearch = true;
  public paginatedResult: PaginatedResultDTO<Opportunity> = {} as PaginatedResultDTO<Opportunity>;

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
    this.loadingSearch = true;
    this.opportunitiesService
      .searchOpportunities(this.filter)
      .pipe(take(1))
      .subscribe({
        next: (result: PaginatedResultDTO<Opportunity>) => this.handleOpportunitiesRequestNext(result),
        complete: () => this.completRequest(),
        error: () => this.completRequest()
      });
  }

  private handleOpportunitiesRequestNext(paginatedResult: PaginatedResultDTO<Opportunity>): void {
    this.paginatedResult = paginatedResult;
  }

  private completRequest(): void {
    this.loadingSearch = false;
  }

}
