import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail.component';
import { DetailsRoutingModule } from './details-routing.module';
import { StoreModule } from '@ngrx/store';
import * as fromDetails from './reducers';

@NgModule({
  declarations: [DetailComponent],
  imports: [
    CommonModule,
    DetailsRoutingModule,
    StoreModule.forFeature(
      fromDetails.detailsFeatureKey,
      fromDetails.reducers
    ),
  ],
})
export class DetailsModule {}
