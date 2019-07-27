import { Component } from '@angular/core';

// Store can be injected as a service to provide single source of data
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';


import * as PostActions from './actions/post.actions';
import { Post } from './models/post.model';

// interface to define app state 
interface AppState {
  post: Post;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'second-dummy-project';

  post: Observable<Post>; 

  text: string; // value from input field

  // passing AppState (with post property) as interface to Store (object is returned in state)
  constructor(private store: Store<AppState>) {
    //calling select() for fetching data from state. In our case, Post type observable will be returned. 
    this.post = this.store.select('post'); 
  }

  //actions to be dispatched on click event from html
  editText() {
    this.store.dispatch(new PostActions.EditText(this.text));
  }

  resetPost() {
    this.store.dispatch(new PostActions.Reset());
  }

  upVote() {
    this.store.dispatch(new PostActions.Upvote());
  }

  downVote() {
    this.store.dispatch(new PostActions.Downvote());
  }

}
