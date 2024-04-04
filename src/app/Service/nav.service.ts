import { Injectable, inject } from '@angular/core';
import { Route, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavService {
  private dataSubject = new BehaviorSubject<any>({ label: 'Home' });
  data$ = this.dataSubject.asObservable();

  constructor() {
    const storedData = localStorage.getItem('data');
    if (storedData) {
      this.dataSubject.next(JSON.parse(storedData));
    }
  }

  sendData(data: any) {
    localStorage.setItem('data', JSON.stringify(data));
    this.dataSubject.next(data);
  }
}
