import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
  apiKey: 'AIzaSyAC2amnFKemabMmbiODTVlOE0TyRb1A5kg',
  authDomain: 'code-review08.firebaseapp.com',
  databaseURL: 'https://code-review08.firebaseio.com',
  projectId: 'code-review08',
  storageBucket: 'code-review08.appspot.com',
  messagingSenderId: '289887929101'
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule
   ],
  providers: [],
  bootstrap: [AppComponent]
 })
export class AppModule { }






