import { Component, OnInit } from '@angular/core';

import { Character } from './../../../core/models/character.model';
import { CharactersService } from './../../../core/services/characters/characters.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

  characters: Character[] = [];

  constructor(
    private charactersService: CharactersService
  ) { }

  ngOnInit(): void {
    this.fetchCharacters();
  }

  fetchCharacters() {
    this.charactersService.getAllTeachers()
    .subscribe(characters => {
      this.characters = characters;
    });
  }

}
