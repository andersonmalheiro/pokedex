import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { Generation } from 'src/app/api/models/generation';
import { GenerationService } from 'src/app/api/services';

@Component({
  selector: 'app-generation',
  templateUrl: './generation.component.html',
  styleUrls: ['./generation.component.scss'],
})
export class GenerationComponent implements OnInit {
  public data!: Generation;

  public loading = false;

  public error?: Error;

  constructor(
    private generationService: GenerationService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.loadData();
  }

  public loadData() {
    const { id } = this.activatedRoute.snapshot.params;
    if (id) {
      this.loading = true;
      this.generationService
        .getByID(id)
        .pipe(take(1))
        .subscribe(
          (response) => {
            this.loading = false;
            this.error = undefined;

            if (response) {
              const { name } = response;
              const parts = name.split('-');

              this.data = response;
              this.data.name = `${parts[0]} ${parts[1].toUpperCase()}`;
              this.data.pokemon_species.forEach((specie) => {
                const { url } = specie;
                const id = url
                  .split('/')
                  .filter((el) => el)
                  .reverse()[0];

                specie.id = Number(id);
              });
            } else {
              this.data = {} as any;
            }
          },
          (err) => {
            this.loading = false;
            this.error = err;
            this.data = {} as any;
          }
        );
    } else {
      return;
    }
  }
}
