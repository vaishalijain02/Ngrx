import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailComponent } from './detail.component';
import { DetailsResolver } from './details.resolver';

const routes: Routes = [
  {
    path: '',
    component: DetailComponent,
    resolve: {
      details: DetailsResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [DetailsResolver]
})
export class DetailsRoutingModule {}
