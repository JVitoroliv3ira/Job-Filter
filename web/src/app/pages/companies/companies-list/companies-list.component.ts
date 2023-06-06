import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { CompanyFilterDTO } from 'src/app/api/dtos/company-filter.dto';
import { PaginatedResultDTO } from 'src/app/api/dtos/paginated-result.dto';
import { Company } from 'src/app/api/models/company';
import { CompaniesService } from 'src/app/api/services/companies.service';

@Component({
  selector: 'app-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.scss']
})
export class CompaniesListComponent implements OnInit {
  public filter = { pageNumber: 0, pageSize: 5 } as CompanyFilterDTO;
  public loadingSearch = true;
  public paginatedResult: PaginatedResultDTO<Company> = {} as PaginatedResultDTO<Company>;

  constructor(private companiesService: CompaniesService) { }

  ngOnInit(): void {
    this.searchCompanies();
  }

  public handleFilterEvent(filter: CompanyFilterDTO): void {
    this.filter.name = filter.name;
    this.filter.description = filter.description;
    this.filter.email = filter.email;
    this.filter.city = filter.city;

    this.searchCompanies();
  }

  public handleLoadMoreEvent(): void {
    this.filter.pageSize += 5;
    this.searchCompanies();
  }

  private searchCompanies(): void {
    this.loadingSearch = true;
    this.companiesService
      .searchCompanies(this.filter)
      .pipe(take(1))
      .subscribe({
        next: (result: PaginatedResultDTO<Company>) => this.handleCompaniesRequestNext(result),
        complete: () => this.completRequest(),
        error: () => this.completRequest() 
      })
  }

  private handleCompaniesRequestNext(paginatedResult: PaginatedResultDTO<Company>): void {
    this.paginatedResult = paginatedResult;
  }

  private completRequest(): void {
    this.loadingSearch = false;
  }
}
