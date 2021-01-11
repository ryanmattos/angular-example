import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AffComponent } from './aff/aff.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { HeroesComponent } from './heroes/heroes.component';

@NgModule({
   declarations: [
      AppComponent,
      AffComponent,
      NavbarComponent,
      HomeComponent,
      HeroesComponent,
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      RouterModule.forRoot([
         { path: '', component: HomeComponent },
         { path: 'aff', component: AffComponent },
         { path: 'heroes', component: HeroesComponent },
      ]),
   ],
   providers: [],
   bootstrap: [AppComponent],
})
export class AppModule {}
