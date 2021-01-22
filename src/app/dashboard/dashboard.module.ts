import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import { StoreModule } from '@ngrx/store';
import * as fromDashboard from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { DashboardEffects } from './effects/dashboard.effects';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent,
      },
    ]),
    StoreModule.forFeature(
      fromDashboard.dashboardFeatureKey,
      fromDashboard.reducer
    ),
    HttpClientModule,
    EffectsModule.forFeature([DashboardEffects])
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
