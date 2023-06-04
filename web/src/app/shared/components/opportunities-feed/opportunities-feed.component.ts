import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PaginatedResultDTO } from 'src/app/api/dtos/paginated-result.dto';
import { Opportunity } from 'src/app/api/models/opportunity';

@Component({
  selector: 'app-opportunities-feed',
  templateUrl: './opportunities-feed.component.html',
  styleUrls: ['./opportunities-feed.component.scss']
})
export class OpportunitiesFeedComponent {
  @Input() paginatedResult: PaginatedResultDTO<Opportunity> = {} as PaginatedResultDTO<Opportunity>;
  @Input() loadingSearch = true;
  @Output() loadMoreEmitter = new EventEmitter<boolean>();

  public canLoadMore(): boolean {
    return this.paginatedResult.pageSize * (this.paginatedResult.currentPage + 1) < this.paginatedResult.pageSize * this.paginatedResult.totalPages;
  }

  public loadMoreEvent() {
    this.loadMoreEmitter.emit(true);
  }
}
