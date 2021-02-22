/* tslint:disable:no-unused-variable */
import {HttpClientModule} from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {GenerationService} from 'src/app/api/services';

import {GenerationListComponent} from './generation-list.component';

describe('GenerationListComponent', () => {
  let component: GenerationListComponent;
  let fixture: ComponentFixture<GenerationListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenerationListComponent],
      providers: [GenerationService],
      imports: [HttpClientModule, HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(GenerationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should not render an empty message', () => {
    fixture.autoDetectChanges();
    const compiled = fixture.nativeElement;

    expect(compiled.querySelector('.empty-container p')).not.toBeTruthy();
  });
});
