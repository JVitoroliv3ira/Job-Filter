import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { AbstractApiService } from "./abstract-api.service";
import { OpportunityType } from "../enums/opportunity-type";
import { Observable } from "rxjs";
import { OpportunityFilterDTO } from "../dtos/opportunity-filter.dto";
import { PaginatedResultDTO } from "../dtos/paginated-result.dto";
import { Opportunity } from "../models/opportunity";

@Injectable({
    providedIn: 'root'
})
export class OpportunitiesService extends AbstractApiService {
    constructor(http: HttpClient) {
        super('opportunities', http);
    }

    public searchOpportunities(filter: OpportunityFilterDTO): Observable<PaginatedResultDTO<Opportunity>> {
        return this.post<PaginatedResultDTO<Opportunity>, OpportunityFilterDTO>('search', filter);
    }

    public getAllOpportunitiesTypes(): Observable<Array<OpportunityType>> {
        return this.get<Array<OpportunityType>>('types')
    }
}