import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { ComponentsModule } from 'src/app/components';
import { RouterModule } from '@angular/router';
import { GenerationComponent } from './generation';
import { GenerationListComponent } from './generation-list/generation-list.component';

@NgModule({
  imports: [CommonModule, ComponentsModule, RouterModule],
  declarations: [HomeComponent, GenerationComponent, GenerationListComponent],
  exports: [HomeRoutingModule],
})
export class HomeModule {}
