/* tslint:disable:no-unused-variable */

import {TestBed, inject} from '@angular/core/testing';
import {PokemonService} from './pokemon.service';
import {HttpClientModule} from '@angular/common/http';
import {PokemonList} from '../models/pokemon';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import {HttpClient} from '@angular/common/http';

describe('Service: Pokemon', () => {
  let service: PokemonService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PokemonService],
      imports: [HttpClientModule, HttpClientTestingModule],
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = new PokemonService(httpClient);
  });

  it('should create the service', inject(
    [PokemonService],
    (service: PokemonService) => {
      expect(service).toBeTruthy();
    }
  ));

  it('shoud return the value correctly on list method', () => {
    const testData: PokemonList = {
      count: 1118,
      next: 'https://pokeapi.co/api/v2/pokemon/?offset=1&limit=1',
      previous: null,
      results: [
        {
          name: 'bulbasaur',
          url: 'https://pokeapi.co/api/v2/pokemon/1/',
        },
      ],
    };

    service.list({limit: 1}).subscribe(response => {
      expect(response).toEqual(testData);
    });

    const req = httpTestingController.expectOne(
      'https://pokeapi.co/api/v2/pokemon?limit=1'
    );

    expect(req.request.method).toEqual('GET');

    req.flush(testData);

    httpTestingController.verify();
  });

  it('shoud return the value correctly on getById method', () => {
    service.getByID(1).subscribe(response => {
      const {name} = response;
      expect(name).toEqual('bulbasaur');
    });

    const req = httpTestingController.expectOne(
      'https://pokeapi.co/api/v2/pokemon/1'
    );

    expect(req.request.method).toEqual('GET');

    httpTestingController.verify();
  });
});
