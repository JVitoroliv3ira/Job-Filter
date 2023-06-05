import { Component, EventEmitter, Output } from '@angular/core';
import { CompanyFilterDTO } from 'src/app/api/dtos/company-filter.dto';

@Component({
  selector: 'app-companies-filter',
  templateUrl: './companies-filter.component.html',
  styleUrls: ['./companies-filter.component.scss']
})
export class CompaniesFilterComponent {
  public advancedFilterIsExpanded = false;
  public filter = {} as CompanyFilterDTO;
  @Output() filterEvent = new EventEmitter<CompanyFilterDTO>();

  public toggleAdvancedFilterVisibility(): void {
    this.advancedFilterIsExpanded = !this.advancedFilterIsExpanded;
  }

  public submit(): void {
    this.filterEvent.emit(this.filter);
  }
}
