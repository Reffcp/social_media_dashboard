import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocialMediaDataService {

  constructor(private db: AngularFireDatabase) { }

  getSocialMediaData(): Observable<any> {
    return this.db.list('/').valueChanges();
  }
}
