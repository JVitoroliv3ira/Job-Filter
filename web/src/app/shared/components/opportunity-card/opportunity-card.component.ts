import { Component, Input } from '@angular/core';
import { Opportunity } from 'src/app/api/models/opportunity';

@Component({
  selector: 'app-opportunity-card',
  templateUrl: './opportunity-card.component.html',
  styleUrls: ['./opportunity-card.component.scss']
})
export class OpportunityCardComponent {
  public cardIsExpanded = false;
  @Input() opportunity: Opportunity = {} as Opportunity;

  public toggleCardStatus(): void {
    this.cardIsExpanded = !this.cardIsExpanded;
  }
}
