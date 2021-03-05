import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getPersonas(): Observable<any> {
    return this.http.get(
      'https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole'
    );
  }

  setStorage(key, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  getStorage(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  existStorage(key) {
    if (localStorage.getItem(key) === null) {
      return false;
    }
    return true;
  }
}
