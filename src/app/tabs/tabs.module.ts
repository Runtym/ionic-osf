import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';
import { SignupPageModule} from'../signup/signup.module';
import { TabsPage } from './tabs.page';
import { LoginPageModule } from '../login/login.module';
import { HomePageModule } from '../home/home.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    SignupPageModule,
    LoginPageModule,
    HomePageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
