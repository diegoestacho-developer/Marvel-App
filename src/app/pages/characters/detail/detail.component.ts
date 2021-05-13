import { Component, OnInit, Inject } from "@angular/core";

import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Character } from "src/app/core/models/character";

@Component({
  selector: 'app-characters-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})

export class CharactersDetailComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public character: Character
  ) { }

  async ngOnInit() { }
}
