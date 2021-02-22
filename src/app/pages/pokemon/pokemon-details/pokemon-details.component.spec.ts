/* tslint:disable:no-unused-variable */
import {HttpClientModule} from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {PokemonService} from 'src/app/api/services/pokemon.service';
import {PokemonDetailsComponent} from './pokemon-details.component';
import {RouterTestingModule} from '@angular/router/testing';

describe('PokemonDetailsComponent', () => {
  let component: PokemonDetailsComponent;
  let fixture: ComponentFixture<PokemonDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonDetailsComponent],
      providers: [PokemonService],
      imports: [HttpClientModule, HttpClientTestingModule, RouterTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
