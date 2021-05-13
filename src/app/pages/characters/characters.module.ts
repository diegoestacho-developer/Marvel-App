import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { CharactersRoutingModule } from './characters-routing.module';

import { CharactersListComponent } from './list/list.component';
import { CharactersDetailComponent } from './detail/detail.component';


@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    MatCardModule,
    MatListModule,
    MatDialogModule,
    MatButtonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    CharactersRoutingModule
  ],
  declarations: [CharactersListComponent, CharactersDetailComponent],
  entryComponents: [CharactersDetailComponent]
})
export class CharactersModule { }
