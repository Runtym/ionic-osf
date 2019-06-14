import { Injectable } from '@angular/core';
import { Member } from '../vo/member';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() {
  }
  setItems(member:Member){
    for(var key in member){
      localStorage.setItem(key,member[key]);
    }
  }
  getItem(key:string){
    return localStorage.getItem(key);
  }
  setItem(key:string,value:string){
    localStorage.setItem(key,value);
  }
}
