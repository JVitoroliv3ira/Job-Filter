import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { take } from 'rxjs';
import { OpportunityFilterDTO } from 'src/app/api/dtos/opportunity-filter.dto';
import { OpportunityType } from 'src/app/api/enums/opportunity-type';
import { Tag } from 'src/app/api/models/tag';
import { OpportunitiesService } from 'src/app/api/services/opportunities.service';
import { TagService } from 'src/app/api/services/tag.service';

@Component({
  selector: 'app-opportunities-filter',
  templateUrl: './opportunities-filter.component.html',
  styleUrls: ['./opportunities-filter.component.scss']
})
export class OpportunitiesFilterComponent implements OnInit {
  public advancedFilterIsExpanded = false;
  public tags: Array<Tag> = [];
  public loadingTags = true;
  public types: Array<OpportunityType> = [];
  public loadingOpportunitiesTypes = true;
  public filter = {} as OpportunityFilterDTO;
  @Output() filterEvent = new EventEmitter<OpportunityFilterDTO>();

  constructor(private tagService: TagService, private opportunitiesService: OpportunitiesService) { }

  ngOnInit(): void {
    this.findAllTags();
    this.findAllOpportunitiesTypes();
  }

  public toggleAdvancedFilterVisibility(): void {
    this.advancedFilterIsExpanded = !this.advancedFilterIsExpanded;
  }

  public submit(): void {
    this.filterEvent.emit(this.filter);
  }

  private findAllOpportunitiesTypes(): void {
    this.loadingOpportunitiesTypes = true;
    this.opportunitiesService
      .getAllOpportunitiesTypes()
      .pipe(take(1))
      .subscribe({
        next: (types: Array<OpportunityType>) => this.handleOpportunitiesTypesRequestNext(types),
        complete: () => this.handleOpportunitiesTypesRequestComplete(),
        error: () => this.handleOpportunitiesTypesRequestError()
      });
  }

  private handleOpportunitiesTypesRequestNext(types: Array<OpportunityType>): void {
    this.types = types;
  }

  private handleOpportunitiesTypesRequestComplete(): void {
    this.loadingOpportunitiesTypes = false;
  }

  private handleOpportunitiesTypesRequestError(): void {
    this.loadingOpportunitiesTypes = false;
  }

  private findAllTags(): void {
    this.loadingTags = true;
    this.tagService
    .getAllTags()
    .pipe(take(1))
    .subscribe({ 
      next: (tags: Array<Tag>) => this.handleTagRequestNext(tags),
      complete: () => this.handleTagRequestComplete(),
      error: () => this.handleTagRequestError()
    });
  }

  private handleTagRequestNext(tags: Array<Tag>): void {
    this.tags = tags;
  }

  private handleTagRequestComplete(): void {
    this.loadingTags = false;
  }

  private handleTagRequestError(): void {
    this.loadingTags = false;
  }

}
