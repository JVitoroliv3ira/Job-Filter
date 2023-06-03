import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export abstract class AbstractApiService {
    private readonly baseUrl = 'http://localhost:8080/api/v1';

    constructor(private endpoint: string, private http: HttpClient) { }

    public get<R>(path: string): Observable<R> {
        return this.http.get<R>(`${this.baseUrl}/${this.endpoint}/${path}`)
    }

    public post<R, T>(path: string, data: T): Observable<R> {
        return this.http.post<R>(`${this.baseUrl}/${this.endpoint}/${path}`, data);
    }
}