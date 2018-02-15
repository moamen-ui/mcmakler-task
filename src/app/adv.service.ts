import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';

export interface AdvItem {
  image: string;
  title: string;
}

@Injectable()
export class AdvService {
  advsUrl = 'https://api.mcmakler.de/v1/advertisements';
  constructor(private http: HttpClient) { }
  getAdvs() {
    return this.http.get('http://localhost:3000/db').map(result => result);
  }
}
