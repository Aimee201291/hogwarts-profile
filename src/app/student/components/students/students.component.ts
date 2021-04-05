import { Component, OnInit } from '@angular/core';

import { Character } from './../../../core/models/character.model';
import { CharactersService } from './../../../core/services/characters/characters.service';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  characters: Character[] = [];

  constructor(
    private charactersService: CharactersService
  ) { }

  ngOnInit(): void {
    this.fetchCharacters();
  }

  fetchCharacters() {
    this.charactersService.getAllStudents()
    .subscribe(characters => {
      this.characters = characters;
    });
  }

}
