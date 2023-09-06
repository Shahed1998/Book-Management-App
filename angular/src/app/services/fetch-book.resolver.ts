import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of, catchError } from 'rxjs';
import { ApiService } from './api.service';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root',
})
export class FetchBookResolver implements Resolve<Book[]> {
  constructor(private apiService: ApiService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Book[]> {
    return this.apiService.books().pipe(
      catchError((error: any) => {
        return of();
      })
    );
  }
}
