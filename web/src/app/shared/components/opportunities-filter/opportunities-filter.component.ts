import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { Tag } from 'src/app/api/models/tag';
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

  constructor(private tagService: TagService) { }

  ngOnInit(): void {
    this.findAllTags();
  }

  public toggleAdvancedFilterVisibility(): void {
    this.advancedFilterIsExpanded = !this.advancedFilterIsExpanded;
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
