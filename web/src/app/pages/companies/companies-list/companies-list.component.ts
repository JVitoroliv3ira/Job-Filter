import { Component } from '@angular/core';
import { CompanyFilterDTO } from 'src/app/api/dtos/company-filter.dto';
import { PaginatedResultDTO } from 'src/app/api/dtos/paginated-result.dto';
import { Company } from 'src/app/api/models/company';

@Component({
  selector: 'app-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.scss']
})
export class CompaniesListComponent {
  public filter = { pageNumber: 0, pageSize: 5 } as CompanyFilterDTO;
  public loadingSearch = true;
  public paginatedResult: PaginatedResultDTO<Company> = {} as PaginatedResultDTO<Company>;

  public handleFilterEvent(filter: CompanyFilterDTO): void {
    this.filter.name = filter.name;
    this.filter.description = filter.description;
    this.filter.email = filter.email;
    this.filter.city = filter.city;
  }
}
