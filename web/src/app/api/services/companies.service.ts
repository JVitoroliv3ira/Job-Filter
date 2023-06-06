import { Injectable } from "@angular/core";
import { AbstractApiService } from "./abstract-api.service";
import { HttpClient } from "@angular/common/http";
import { CompanyFilterDTO } from "../dtos/company-filter.dto";
import { Observable } from "rxjs/internal/Observable";
import { PaginatedResultDTO } from "../dtos/paginated-result.dto";
import { Company } from "../models/company";

@Injectable({
    providedIn: 'root'
})
export class CompaniesService extends AbstractApiService {
    constructor(http: HttpClient) {
        super('companies', http);
    }

    public searchCompanies(filter: CompanyFilterDTO): Observable<PaginatedResultDTO<Company>> {
        return this.post<PaginatedResultDTO<Company>, CompanyFilterDTO>('search', filter);
    }
}