import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CharactersComponent } from './components/characters/characters.component';

import { CharacterRoutingModule } from './character-routing.module';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  declarations: [
    CharactersComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CharacterRoutingModule,
    FormsModule
  ]
})
export class CharacterModule {

}
