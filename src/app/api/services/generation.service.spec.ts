/* tslint:disable:no-unused-variable */

import {HttpClient, HttpClientModule} from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import {TestBed, inject} from '@angular/core/testing';
import {GenerationList} from '../models/generation';
import {GenerationService} from './generation.service';

describe('Service: Generation', () => {
  let service: GenerationService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GenerationService],
      imports: [HttpClientModule, HttpClientTestingModule],
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = new GenerationService(httpClient);
  });

  it('should create the service', inject(
    [GenerationService],
    (service: GenerationService) => {
      expect(service).toBeTruthy();
    }
  ));

  it('shoud return the value correctly on list method', () => {
    const testData: GenerationList = {
      count: 8,
      next: 'https://pokeapi.co/api/v2/generation?offset=1&limit=1',
      previous: null,
      results: [
        {
          name: 'generation-i',
          url: 'https://pokeapi.co/api/v2/generation/1/',
        },
      ],
    };

    service.list({limit: 1}).subscribe(response => {
      expect(response).toEqual(testData);
    });

    const req = httpTestingController.expectOne(
      'https://pokeapi.co/api/v2/generation?limit=1'
    );

    expect(req.request.method).toEqual('GET');

    req.flush(testData);

    httpTestingController.verify();
  });

  it('shoud return the value correctly on getById method', () => {
    service.getByID(1).subscribe(response => {
      const {name} = response;
      expect(name).toEqual('generation-i');
    });

    const req = httpTestingController.expectOne(
      'https://pokeapi.co/api/v2/generation/1'
    );

    expect(req.request.method).toEqual('GET');

    httpTestingController.verify();
  });
});
