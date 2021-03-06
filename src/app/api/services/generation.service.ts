import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Generation, GenerationList} from '../models/generation';
import {handleError} from 'src/app/utils';

interface GenerationListParams {
  offset?: number;
  limit?: number;
}

@Injectable({
  providedIn: 'root',
})
export class GenerationService {
  private baseURL = environment.baseApiURL;

  constructor(private http: HttpClient) {}

  public list(filters?: GenerationListParams): Observable<GenerationList> {
    return this.http
      .get<GenerationList>(`${this.baseURL}/generation`, {
        params: filters as any,
      })
      .pipe(catchError(handleError));
  }

  public getByID(id: number): Observable<Generation> {
    return this.http
      .get<Generation>(`${this.baseURL}/generation/${id}`)
      .pipe(catchError(handleError));
  }
}
