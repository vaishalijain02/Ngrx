import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail.component';
import { DetailsRoutingModule } from './details-routing.module';
import { StoreModule } from '@ngrx/store';
import * as fromDetails from './reducers';
import { DetailsEffects } from './effects/details.effects';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [DetailComponent],
  imports: [
    CommonModule,
    DetailsRoutingModule,
    StoreModule.forFeature(
      fromDetails.detailsFeatureKey,
      fromDetails.reducer
    ),
    EffectsModule.forFeature([DetailsEffects])
  ],
})
export class DetailsModule {}
