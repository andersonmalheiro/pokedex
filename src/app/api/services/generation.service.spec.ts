/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GenerationService } from './generation.service';

describe('Service: Pokemon', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GenerationService],
    });
  });

  it('should ...', inject([GenerationService], (service: GenerationService) => {
    expect(service).toBeTruthy();
  }));
});
