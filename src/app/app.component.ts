import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';

import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { AngularFireAuth} from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  items: FirebaseListObservable<any[]>;

  title = 'Hello world';
  constructor(public af: AngularFireDatabase) {
    this.items = this.af.list('/item');
  }
  ngOnInit() {

  }

}
