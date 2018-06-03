import {Injectable} from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import 'rxjs/add/operator/map';
import { persons } from '../Items';

@Injectable()
export class FirebaseService {
  persons: FirebaseListObservable<persons[]>;


  constructor(private af: AngularFireDatabase) {

  }
  getPersons(category: string = null) {
    if (category != null) {
        this.persons = this.af.list('/persons', {
            query: {
                orderByChild: 'categories',
                equalTo: category
            }
        }) as FirebaseListObservable<persons[]>;
    } else {
        this.persons = this.af.list('/persons') as FirebaseListObservable<persons[]>;
    }
        return this.persons;
  }
}
