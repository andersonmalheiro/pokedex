import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {debounceTime, take} from 'rxjs/operators';
import {PokemonResult} from 'src/app/api/models/pokemon';
import {PokemonService} from 'src/app/api/services/pokemon.service';
import {extractId} from 'src/app/utils';

interface LoadDataParams {
  firstTime?: boolean;
  paginate?: boolean;
  params?: any;
}

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit, AfterViewInit {
  @ViewChild('pokemonList', {static: false})
  private listRef!: ElementRef<HTMLDivElement>;

  public data!: PokemonResult[];

  public loading = false;

  public infinityLoading = false;

  public error?: Error;

  public next = false;

  private limit = 20;

  private offset = 20;

  private scrollBehavior$: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.loadData({});

    this.scrollBehavior$.pipe(debounceTime(500)).subscribe(() => {
      this.scroll(this.listRef);
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.listRef.nativeElement.addEventListener('scroll', e => {
        this.onScroll(e);
      });
    });
  }

  private onScroll(event: any) {
    this.scrollBehavior$.next(event);
  }

  /**
   * Method to load pokemon
   */
  public loadData({
    params,
    firstTime = true,
    paginate = false,
  }: LoadDataParams) {
    if (firstTime) {
      this.offset = 0;
      this.loading = true;
      this.infinityLoading = false;
    }

    if (paginate) {
      this.loading = false;
      this.infinityLoading = true;
    }

    this.pokemonService
      .list(params)
      .pipe(take(1))
      .subscribe(
        response => {
          this.loading = false;
          this.infinityLoading = false;
          this.error = undefined;
          this.next = !!response.next;

          if (response.results && response.results.length) {
            response.results.forEach(pokemon => {
              const {url} = pokemon;
              const id = extractId(url);
              if (id) {
                pokemon.id = id;
              }

              return pokemon;
            });

            if (paginate) {
              this.data = [...this.data, ...response.results];
            } else {
              this.data = response.results;
            }
          } else {
            this.data = [];
          }
        },
        err => {
          this.loading = false;
          this.infinityLoading = false;
          this.data = [];
          this.error = err;
        }
      );
  }

  /**
   * Method to handle scroll on list to paginate when user get to the end of the list
   */
  private scroll(element: ElementRef) {
    const column = element.nativeElement;
    if (column.offsetHeight + column.scrollTop >= column.scrollHeight) {
      if (this.next) {
        this.infinityLoading = false;
        this.offset += 20;
        this.loadData({
          firstTime: false,
          paginate: true,
          params: {
            offset: this.offset,
            limit: this.limit,
          },
        });
      }
    }
  }
}
