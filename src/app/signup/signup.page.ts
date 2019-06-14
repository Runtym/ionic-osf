import { Component, OnInit, ViewChild } from '@angular/core';
import { Member } from '../vo/member';
import { CommonService } from '../common/common.service';
import { DaumAddressComponent } from 'ng2-daum-address/da.component';

import { HttpHeaders, HttpClient } from '@angular/common/http';

const baseUrl = "http://192.168.0.2:88"
const httpFile2 = {
  headers : new HttpHeaders(
    {'Content-Type':'multipart/form-data'}
  )
}
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  member:Member = new Member();
  isUnique:boolean = false;
  option = {};
  @ViewChild('dt') dt;

  constructor(private cs:CommonService,
    private _http:HttpClient) {
    this.option['class'] = 'color: #fff;background-color: #0275d8;border-color: #0275d8;';
  }

  ngOnInit() {
    console.log(this.dt);
  }
  setDaumAddressApi(evt){
    this.member.omZipcode = evt.zip;
    this.member.omAddr1 = evt.addr;
  }
  doSignup(){
    if(!this.isUnique){
      alert('중복체크해주세요');
      return false;
    }
    this.member.omBirth = this.member.omBirth.split('T')[0].split('-').join('');
    var url = '/test';
    this.cs.postFile(url,this.member).subscribe(
      res=>{
        console.log(res);
      },
      err=>{
        console.log(err);
      }
    )
    this.postFile2(url,this.member).subscribe(
      res=>{
        console.log(res);
      },
      err=>{
        console.log(err);
      }
    )
    console.log(this.member);
  }
  setFile(evt){
    this.member.omProfileFile = evt.target.files[0];
  }

  makeFormData(obj):FormData{
    const formData = new FormData();
    for(var key in obj){
      formData.append(key,obj[key]);
    }
    return formData;
  }
  postFile2(url,obj){
    url = baseUrl + url;
    const data = this.makeFormData(obj);
    return this._http.post(url,data,httpFile2);
  }
  checkId(){
    var url = "/member/" + this.member.omId;
    console.log(this.cs);
    this.cs.get(url).subscribe(
      res=>{
        if(!res){
          alert(`${this.member.omId}는 사용 가능한 아이디입니다.`);
          this.isUnique = true;
        }else{
          alert(`${this.member.omId}는 중복된 아이디입니다.`);
        }
      },
      err=>{
        console.log(err);
      }
    )
  }
}
