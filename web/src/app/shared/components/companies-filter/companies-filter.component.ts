import { Component } from '@angular/core';

@Component({
  selector: 'app-companies-filter',
  templateUrl: './companies-filter.component.html',
  styleUrls: ['./companies-filter.component.scss']
})
export class CompaniesFilterComponent {
  public advancedFilterIsExpanded = false;

  public toggleAdvancedFilterVisibility(): void {
    this.advancedFilterIsExpanded = !this.advancedFilterIsExpanded;
  }
}
