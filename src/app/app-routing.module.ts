import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroDetailComponent } from './pages/hero-detail/hero-detail.component';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
   { path: 'heroes', component: HeroesComponent },
   { path: 'dashboard', component: HomeComponent },
   { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
   { path: 'detail/:id', component: HeroDetailComponent },
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule],
})
export class AppRoutingModule {}
