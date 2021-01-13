import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { NavbarComponent } from './pages/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { HeroDetailComponent } from './pages/hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { HeroSearchComponent } from './pages/hero-search/hero-search.component';

@NgModule({
   declarations: [
      AppComponent,
      NavbarComponent,
      HomeComponent,
      HeroesComponent,
      HeroDetailComponent,
      MessagesComponent,
      HeroSearchComponent,
   ],
   imports: [
      BrowserModule,
      FormsModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      HttpClientModule,
      HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
         dataEncapsulation: false,
      }),
   ],
   providers: [],
   bootstrap: [AppComponent],
})
export class AppModule {}
