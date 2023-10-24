import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private startLocationSubject: Subject<any> = new Subject<any>();
  private endLocationSubject: Subject<any> = new Subject<any>();
  // private onFocus: Subject<any> = new Subject<any>();
  // private onMapLoad: Subject<any> = new Subject<any>();


  setStartLocation(location: any) {
    this.startLocationSubject.next(location);
  }

  setEndLocation(location: any) {
    this.endLocationSubject.next(location);
  }

  getStartLocation(): Observable<any> {
    return this.startLocationSubject.asObservable();
  }

  getEndLocation(): Observable<any> {
    return this.endLocationSubject.asObservable();
  }
}