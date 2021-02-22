import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GenerationComponent} from './generation';
import {GenerationListComponent} from './generation-list/generation-list.component';
import {HomeComponent} from './home.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'generations'},
  {
    path: 'generations',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: GenerationListComponent,
      },
      {
        path: ':id',
        component: GenerationComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
