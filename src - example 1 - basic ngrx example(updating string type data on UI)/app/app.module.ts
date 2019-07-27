import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { simpleReducer } from './reducers/simple.reducer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({message: simpleReducer}) // object with message key and simpleReducer as value
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
