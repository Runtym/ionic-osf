import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MoviePage } from './movie.page';
import {MatVideoModule} from 'mat-video';

const routes: Routes = [
  {
    path: '',
    component: MoviePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatVideoModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MoviePage]
})
export class MoviePageModule {}
