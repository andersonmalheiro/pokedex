import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home').then(m => m.HomeModule),
  },
  {
    path: 'pokemon',
    loadChildren: () => import('./pages/pokemon').then(m => m.PokemonModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
