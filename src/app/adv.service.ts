import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AdvService {
  // advsUrl = 'https://api.mcmakler.de/v1/advertisements';
  advsUrl = 'http://localhost:3000/db';
  constructor(private http: HttpClient) { }
  getAdvs() {
    return this.http.get(this.advsUrl).map(result => result);
  }
}
