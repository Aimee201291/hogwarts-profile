import { Component, OnInit } from '@angular/core';

import { Character } from './../../../core/models/character.model';
import { CharactersService } from './../../../core/services/characters/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters: Character[] = [];
  houses: string[] = ["slytherin", "gryffindor", "ravenclaw", "hufflepuff"];
  selectedHouse = 'gryffindor';

  constructor(
    private charactersService: CharactersService
  ) { }

  ngOnInit(): void {
    this.fetchCharacters();
  }

  fetchCharacters() {
    this.charactersService.getAllCharacters()
    .subscribe(characters => {
      this.characters = characters;
    });
  }

  fetchCharactersByHouse(selectedHouse: string) {
    this.charactersService.getCharactersByHouse(this.selectedHouse)
    .subscribe(characters => {
      this.characters = characters;
    });
  }

}
