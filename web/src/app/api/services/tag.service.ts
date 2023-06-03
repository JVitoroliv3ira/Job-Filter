import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { AbstractApiService } from "./abstract-api.service";
import { Observable } from "rxjs";
import { Tag } from "../models/tag";

@Injectable({
    providedIn: 'root'
})
export class TagService extends AbstractApiService {
    constructor(http: HttpClient) {
        super('tags', http);
    }

    public getAllTags(): Observable<Array<Tag>> {
        return this.get<Array<Tag>>('all');
    }
}