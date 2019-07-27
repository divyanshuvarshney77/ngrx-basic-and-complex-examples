import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { postReducer } from './reducers/post.reducer';
import { simpleReducer } from './reducers/simple.reducer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({post: postReducer,
      message: simpleReducer}) // object with message key and simpleReducer as value
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
