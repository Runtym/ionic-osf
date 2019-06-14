import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { SignupPage } from './signup.page';
import { NgDaumAddressModule } from 'ng2-daum-address';
var routes = [
    {
        path: '',
        component: SignupPage
    }
];
var SignupPageModule = /** @class */ (function () {
    function SignupPageModule() {
    }
    SignupPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                HttpClientModule,
                RouterModule.forChild(routes),
                NgDaumAddressModule
            ],
            declarations: [SignupPage]
        })
    ], SignupPageModule);
    return SignupPageModule;
}());
export { SignupPageModule };
//# sourceMappingURL=signup.module.js.map