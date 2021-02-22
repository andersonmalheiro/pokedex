/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GenerationListComponent} from './generation-list.component';

describe('GenerationListComponent', () => {
  let component: GenerationListComponent;
  let fixture: ComponentFixture<GenerationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GenerationListComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
