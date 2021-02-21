import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { GenerationResult } from 'src/app/api/models/generation';
import { GenerationService } from 'src/app/api/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public data!: GenerationResult[];

  public loading = false;

  public error?: Error;

  constructor(private generationService: GenerationService) {}

  ngOnInit() {
    this.loadData();
  }

  public loadData() {
    this.loading = true;
    this.generationService
      .list()
      .pipe(take(1))
      .subscribe(
        (response) => {
          this.loading = false;
          this.error = undefined;

          if (response.results && response.results.length) {
            this.data = response.results.map((gen) => {
              const { name, url } = gen;

              const parts = name.split('-');
              gen.name = `${parts[0]} ${parts[1].toUpperCase()}`;

              const id = url
                .split('/')
                .filter((el) => el)
                .reverse()[0];
              gen.id = Number(id);

              return gen;
            });
          } else {
            this.data = [];
          }
        },
        (err) => {
          this.loading = false;
          this.data = [];
          this.error = err;
        }
      );
  }
}
