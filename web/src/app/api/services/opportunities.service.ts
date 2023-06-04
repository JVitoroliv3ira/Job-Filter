import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { AbstractApiService } from "./abstract-api.service";
import { OpportunityType } from "../enums/opportunity-type";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class OpportunitiesService extends AbstractApiService {
    constructor(http: HttpClient) {
        super('opportunities', http);
    }

    public getAllOpportunitiesTypes(): Observable<Array<OpportunityType>> {
        return this.get<Array<OpportunityType>>('types')
    }
}