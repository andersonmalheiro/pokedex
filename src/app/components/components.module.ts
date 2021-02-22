import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar';
import { LoadingIndicatorComponent } from './loading-indicator/loading-indicator.component';
import { EmptyIndicatorComponent } from './empty-indicator/empty-indicator.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    NavbarComponent,
    LoadingIndicatorComponent,
    EmptyIndicatorComponent,
  ],
  exports: [
    NavbarComponent,
    LoadingIndicatorComponent,
    EmptyIndicatorComponent,
  ],
})
export class ComponentsModule {}
