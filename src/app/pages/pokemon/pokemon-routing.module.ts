import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonDetailsComponent } from './pokemon-details';
import { PokemonListComponent } from './pokemon-list';
import { PokemonComponent } from './pokemon.component';

const routes: Routes = [
  {
    path: '',
    component: PokemonComponent,
    children: [
      {
        path: '',
        component: PokemonListComponent,
      },
      {
        path: ':id',
        component: PokemonDetailsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonRoutingModule {}
