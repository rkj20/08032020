import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // To store the value once the user is logged in so that we won't show the login box again
  public loggedIn = false;
  
  constructor() { }
}
