import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PaginatedResultDTO } from 'src/app/api/dtos/paginated-result.dto';
import { Company } from 'src/app/api/models/company';

@Component({
  selector: 'app-companies-feed',
  templateUrl: './companies-feed.component.html',
  styleUrls: ['./companies-feed.component.scss']
})
export class CompaniesFeedComponent {
  @Input() paginatedResult: PaginatedResultDTO<Company> = {} as PaginatedResultDTO<Company>;
  @Input() loadingSearch = true;
  @Output() loadMoreEmitter = new EventEmitter<boolean>();

  public canLoadMore(): boolean {
    return this.paginatedResult.pageSize * (this.paginatedResult.currentPage + 1) < this.paginatedResult.pageSize * this.paginatedResult.totalPages;
  }

  public loadMoreEvent() {
    this.loadMoreEmitter.emit(true);
  }

}
