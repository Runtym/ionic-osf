import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common/common.service';
import { StorageService } from '../common/storage.service';
import { Member } from '../vo/member';
import { elementStyleProp } from '@angular/core/src/render3';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private cs:CommonService,
    private ss:StorageService,
    private router:Router) { }

  ngOnInit() {
  }
  login(form){
    var url='/login';
    this.cs.postJson(url,form.value).subscribe(
      res=>{
        if(res){ 
          alert('로그인 성공하셨습니다.');
          this.ss.setItems(<Member>res);
          this.router.navigateByUrl('/tabs/home');
        }else{
          alert('아이디 비밀번호를 확인해주세요!');
        }
      },
      err=>{
        
      }
    )
  }
}
