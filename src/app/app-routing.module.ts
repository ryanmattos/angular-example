import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AffComponent } from './aff/aff.component';

const routes: Routes = [{ path: 'aff', component: AffComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
