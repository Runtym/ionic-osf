import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Member } from '../vo/member';
import { CommonService } from '../common/common.service';
var SignupPage = /** @class */ (function () {
    function SignupPage(cs) {
        this.cs = cs;
        this.member = new Member();
        this.isUnique = false;
        this.option = {};
        this.option['class'] = 'color: #fff;background-color: #0275d8;border-color: #0275d8;';
    }
    SignupPage.prototype.ngOnInit = function () {
    };
    SignupPage.prototype.setDaumAddressApi = function (evt) {
        this.member.omZipcode = evt.zip;
        this.member.omAddr1 = evt.addr;
    };
    SignupPage.prototype.doSignup = function () {
        if (!this.isUnique) {
            alert('중복체크해주세요');
            return false;
        }
        var url = '/test';
        this.cs.postFile(url, this.member).subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.log(err);
        });
        console.log(this.member);
    };
    SignupPage.prototype.setFile = function (evt) {
        this.member.omProfileFile = evt.target.files[0];
    };
    SignupPage.prototype.checkId = function () {
        var _this = this;
        var url = "/member/" + this.member.omId;
        console.log(this.cs);
        this.cs.get(url).subscribe(function (res) {
            if (!res) {
                alert(_this.member.omId + "\uB294 \uC0AC\uC6A9 \uAC00\uB2A5\uD55C \uC544\uC774\uB514\uC785\uB2C8\uB2E4.");
                _this.isUnique = true;
            }
            else {
                alert(_this.member.omId + "\uB294 \uC911\uBCF5\uB41C \uC544\uC774\uB514\uC785\uB2C8\uB2E4.");
            }
        }, function (err) {
            console.log(err);
        });
    };
    SignupPage = tslib_1.__decorate([
        Component({
            selector: 'app-signup',
            templateUrl: './signup.page.html',
            styleUrls: ['./signup.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [CommonService])
    ], SignupPage);
    return SignupPage;
}());
export { SignupPage };
//# sourceMappingURL=signup.page.js.map