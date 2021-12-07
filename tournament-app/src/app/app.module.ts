import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AppRoutingModule } from './routes/app-routing.module';
import { CardComponent } from './components/card/card.component';
import { FormsModule } from "@angular/forms";
import { TournamentComponent } from './pages/tournament/tournament.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    TournamentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
