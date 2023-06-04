import { Component, Input } from '@angular/core';
import { PaginatedResultDTO } from 'src/app/api/dtos/paginated-result.dto';
import { Opportunity } from 'src/app/api/models/opportunity';

@Component({
  selector: 'app-opportunities-feed',
  templateUrl: './opportunities-feed.component.html',
  styleUrls: ['./opportunities-feed.component.scss']
})
export class OpportunitiesFeedComponent {
  @Input() paginatedResult: PaginatedResultDTO<Opportunity> = {} as PaginatedResultDTO<Opportunity>;
}
