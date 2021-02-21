import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Pokemon, PokemonList, PokemonSpecie } from '../models/pokemon';
import { handleError } from 'src/app/utils';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private baseURL = environment.baseApiURL;

  constructor(private http: HttpClient) {}

  public list(): Observable<PokemonList> {
    return this.http
      .get<PokemonList>(`${this.baseURL}/pokemon`)
      .pipe(catchError(handleError));
  }

  public getByID(id: number): Observable<Pokemon> {
    return this.http
      .get<Pokemon>(`${this.baseURL}/pokemon/${id}`)
      .pipe(catchError(handleError));
  }

  public getSpecieByID(id: number): Observable<PokemonSpecie> {
    return this.http
      .get<PokemonSpecie>(`${this.baseURL}/pokemon-species/${id}`)
      .pipe(catchError(handleError));
  }
}
