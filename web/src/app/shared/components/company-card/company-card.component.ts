import { Component, Input } from '@angular/core';
import { Company } from 'src/app/api/models/company';

@Component({
  selector: 'app-company-card',
  templateUrl: './company-card.component.html',
  styleUrls: ['./company-card.component.scss']
})
export class CompanyCardComponent {
  public cardIsExpanded = false;
  @Input() company: Company = {} as Company;

  public toggleCardStatus(): void {
    this.cardIsExpanded = !this.cardIsExpanded;
  }
}
