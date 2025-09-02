import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone?: string;
  website?: string;
  address?: any;
  company?: any;
}


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private API_URL = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.API_URL).pipe(
      catchError(err => {
        console.error('Error fetching users', err);
        return throwError(() => err);
      })
    );
  }
}
