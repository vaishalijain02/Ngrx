import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import * as fromDashboard from './reducers';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent,
      },
    ]),
    StoreModule.forFeature(
      fromDashboard.dashboardFeatureKey,
      fromDashboard.reducers
    ),
  ],

  exports: [DashboardComponent],
})
export class DashboardModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DashboardModule,
      providers: []
    }
  }
}
