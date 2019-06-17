import { Component, OnInit, ViewChild } from '@angular/core';
import { Member } from '../vo/member';
import { CommonService } from '../common/common.service';
import { DaumAddressComponent } from 'ng2-daum-address/da.component';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  member:Member = new Member();
  isUnique:boolean = false;
  isModify:boolean = false;
  option = {};
  btnStr : string = '회원가입';
  @ViewChild('dt') dt;

  constructor(private cs:CommonService,
    private route:ActivatedRoute,
    private lc:LoadingController) {
    this.option['class'] = 'color: #fff;background-color: #0275d8;border-color: #0275d8;';
  }

  async ngOnInit() {
    var omId = this.route.snapshot.paramMap.get('omId');
    console.log(omId);
    if(this.route.snapshot.paramMap.get('omId')){
      this.isModify = true;
      this.btnStr = '회원정보수정';
      var lcv = await this.lc.create({
        message:'불러오는중..'
      })
      await lcv.present();
      this.cs.get('/member/'+this.route.snapshot.paramMap.get('omId')).subscribe(
        res=>{
          if(res){
            this.member = <Member>res;
            this.member.omProfile = "http://localhost:88/img/" + this.member.omProfile;
          }else{

          }
          lcv.dismiss();
        },err=>{
          lcv.dismiss();
        }
      )
    }
    console.log(this.dt);
  }
  
  setDaumAddressApi(evt){
    this.member.omZipcode = evt.zip;
    this.member.omAddr1 = evt.addr;
  }
  doSignup(){
    if(!this.isModify){
      if(!this.isUnique){
        alert('중복체크해주세요');
        return false;
      }
      this.member.omBirth = this.member.omBirth.split('T')[0].split('-').join('');
      var url = '/member';
      this.cs.postFile(url,this.member).subscribe(
        res=>{
          console.log(res);
        },
        err=>{
          console.log(err);
        }
      )
      console.log(this.member);
    }else{
      this.member.omBirth = this.member.omBirth.split('T')[0].split('-').join('');
      var url = '/member/modi';
      this.cs.postFile(url,this.member).subscribe(
        res=>{
          console.log(res);
        },
        err=>{
          console.log(err);
        }
      )
    }
  }
  setFile(evt){
    var reader = new FileReader();
    reader.onload = (e)=>{
      this.member.omProfile = 
        (<FileReader>e.target).result.toString();
    }
    reader.readAsDataURL(evt.target.files[0]);
    this.member.omProfileFile = evt.target.files[0];
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
