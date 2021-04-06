import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Character } from './../../models/character.model';

import { environment } from './../../../../environments/environment';

import { CharactersComponent } from './../../../character/components/characters/characters.component';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(
    private http: HttpClient
  ) { }

  getAllCharacters() {
    return this.http.get<Character[]>(`${environment.url_api}/house/gryffindor`);
  }

  getAllStudents() {
    return this.http.get<Character[]>(`${environment.url_api}/students`);
  }

  getAllTeachers() {
    return this.http.get<Character[]>(`${environment.url_api}/staff`);
  }

  getCharactersByHouse(selectedHouse: string) {
    return this.http.get<Character[]>(`${environment.url_api}/house/${selectedHouse}`);
  }
}
