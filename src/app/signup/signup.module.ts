import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {HttpClientModule} from'@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { SignupPage } from './signup.page';
import { NgDaumAddressModule } from 'ng2-daum-address';
import { Tab1PageModule } from '../tab1/tab1.module';
import { Tab2Page } from '../tab2/tab2.page';

const routes: Routes = [
  {
    path: '',
    component: SignupPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    NgDaumAddressModule,
    Tab1PageModule
  ],
  declarations: [SignupPage]
})
export class SignupPageModule {}
