import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { FirebaseService } from './services/firebase.services';
import { persons } from './Items';

@Component({

 selector: 'app-root',

 templateUrl: './app.component.html',

 styleUrls: ['./app.component.css'],

 providers: [FirebaseService]

})

export class AppComponent implements OnInit {

  persons: persons[];
  appState: string;
  activeKey: string;

 constructor(private _firebaseService: FirebaseService) {
}

ngOnInit() {
  this.appState = 'default';
  this._firebaseService.getPersons().subscribe(persons => {
    this.persons = persons;
  });
}

}


