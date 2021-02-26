import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PokeSearchPipe } from './pipe/poke-search.pipe';
import { HttpClientModule } from '@angular/common/http';
import { PokeDetailComponent } from './poke-detail/poke-detail.component';
import { ButtonModule } from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import {CardModule} from 'primeng/card';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PokeSearchPipe,
    PokeDetailComponent,

  ],
  imports: [
    BrowserModule,
    MatInputModule,
    AppRoutingModule,
    FormsModule,
    MatIconModule,
    MatCardModule,
    MatSelectModule,
    HttpClientModule,
    ButtonModule,
    BrowserAnimationsModule,
    InputTextModule,
    DropdownModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
