import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {take} from 'rxjs/operators';
import {Pokemon, PokemonSpecie} from 'src/app/api/models/pokemon';
import {PokemonService} from 'src/app/api/services/pokemon.service';
import {extractId} from 'src/app/utils';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss'],
})
export class PokemonDetailsComponent implements OnInit {
  public pokemon?: Pokemon;

  public specie?: PokemonSpecie;

  public loading = false;

  public error?: Error;

  constructor(
    private pokemonService: PokemonService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.loadData();
  }

  public loadData() {
    const {id} = this.activatedRoute.snapshot.params;
    if (id) {
      this.loading = true;
      this.pokemonService
        .getByID(id)
        .pipe(take(1))
        .subscribe(
          response => {
            this.error = undefined;

            if (response) {
              const {species} = response;
              const specieId = extractId(species.url);
              this.pokemon = response;
              this.pokemon.height = this.pokemon.height / 10;
              this.pokemon.weight = this.pokemon.weight / 10;

              if (specieId) {
                this.loadSpecieData(specieId);
              } else {
                this.loading = false;
              }
            } else {
              this.pokemon = undefined;
            }
          },
          err => {
            this.loading = false;
            this.error = err;
            this.pokemon = undefined;
          }
        );
    } else {
      return;
    }
  }

  public loadSpecieData(specie: number) {
    this.pokemonService
      .getSpecieByID(specie)
      .pipe(take(1))
      .subscribe(
        response => {
          this.loading = false;
          this.specie = response;
        },
        () => {
          this.loading = false;
        }
      );
  }
}
