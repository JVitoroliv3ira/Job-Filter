import { Component } from '@angular/core';

@Component({
  selector: 'app-opportunities-filter',
  templateUrl: './opportunities-filter.component.html',
  styleUrls: ['./opportunities-filter.component.scss']
})
export class OpportunitiesFilterComponent {
  public advancedFilterIsExpanded = false;

  public toggleAdvancedFilterVisibility(): void {
    this.advancedFilterIsExpanded = !this.advancedFilterIsExpanded;
  }
}
