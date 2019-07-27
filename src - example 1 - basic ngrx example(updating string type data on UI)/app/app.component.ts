import { Component } from '@angular/core';

// Store can be injected as a service to provide single source of data
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

// interface to define app state 
interface AppState {
  message: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'second-dummy-project';

  $message: Observable<string>; // $message is observable of type string which will be updated on html UI using async pipe

  constructor(private store: Store<AppState>) {
    //calling select() for fetching data from state. In our case, string type observable will be returned. 
    this.$message = this.store.select('message'); 
  }

  // calling dispatch() method to send action to the reducer to update the state
  spanishMessage() {
    this.store.dispatch({type: 'SPANISH'});
  }

  // calling dispatch() method to send action to the reducer to update the state
  frenchMessage() {
    this.store.dispatch({type: 'FRENCH'});
  }

}
