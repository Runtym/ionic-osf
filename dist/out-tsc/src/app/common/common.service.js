import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
var baseUrl = "http://192.168.0.2:88";
var httpJson = {
    headers: new HttpHeaders({ 'Conteypt-Type': 'application/json' })
};
var httpFile = {
    headers: new HttpHeaders({ 'Conteypt-Type': 'multipart/form-data' })
};
var CommonService = /** @class */ (function () {
    function CommonService(_http) {
        this._http = _http;
    }
    CommonService.prototype.get = function (url, params) {
        url = baseUrl + url;
        return this._http.get(url);
    };
    CommonService.prototype.makeFormData = function (obj) {
        var formData = new FormData();
        for (var key in obj) {
            formData.append(key, obj[key]);
        }
        return formData;
    };
    CommonService.prototype.postFile = function (url, obj) {
        url = baseUrl + url;
        var data = this.makeFormData(obj);
        return this._http.post(url, data, httpFile);
    };
    CommonService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], CommonService);
    return CommonService;
}());
export { CommonService };
//# sourceMappingURL=common.service.js.map