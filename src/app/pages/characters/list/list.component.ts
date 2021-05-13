import { Component, OnInit } from "@angular/core";

import { MatDialog } from '@angular/material/dialog';

import { Character } from "src/app/core/models/character";

import { CharactersDetailComponent } from "../detail/detail.component";
import { CharactersService } from "src/app/core/services/characters/characters.service";

@Component({
  selector: 'app-characters-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class CharactersListComponent implements OnInit {

  characters: Character[] = [];

  constructor(
    public dialog: MatDialog,
    private _characters: CharactersService
  ) { }

  async ngOnInit() {
    await this.getCharacters();
  }

  async getCharacters() {
    try {
      const result = await this._characters.getCharactes();
      this.characters = result.data.results;
    } catch (error) {
      console.error('getCharacters error -> ', error);
    }
  }

  async openDetail(character: any) {
    character['items'] = character.comics.items;
    const dialogRef = this.dialog.open(CharactersDetailComponent, {
      data: character
    });
    dialogRef.afterClosed().subscribe(async () => {
      await this.ngOnInit();
    });
  }
}
