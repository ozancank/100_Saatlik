import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Author } from '../components/author/author';

@Injectable({
  providedIn: 'root',
})
export class AuthorService {
  constructor(private http: HttpClient) {}
  path = environment.path;

  getAuthors():Observable<Author[]>{
    return this.http.get<Author[]>(this.path + '/author');
  }
}
