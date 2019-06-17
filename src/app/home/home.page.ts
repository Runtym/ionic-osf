import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common/common.service';
import { Member } from '../vo/member';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  members:Member[];
  baseImgUrl:string = 'http://osf.javajs.net:88/img/'
  constructor(private cs:CommonService,
    private ac:AlertController,
    private router:Router) { 
  }

  ngOnInit() {
    this.doSelectMember();
  }
  doSelectMember(){
    this.cs.get('/members').subscribe(
      res=>{
        this.members=<Member[]>res;
      },
      err=>{

      }
    )
  }
  async doDelete(omNo:number){
    const alert1 = await this.ac.create({
      header:'경고',
      message:'삭제하시겠습니까?',
      buttons:[
        {
          text:'예',
          handler:()=>{
            this.cs.delete('/member/' +omNo).subscribe(
              res=>{
                if(res===1){
                  alert1.dismiss();
                  alert('삭제 되었습니다.');
                  this.doSelectMember();
                }else{
                  alert1.dismiss();
                  alert('삭제가 실패되었습니다.')
                }
              },
              err=>{
        
              }
            );
          }
        },
        {
          text:'아니오'
        }
      ]
    })
    await alert1.present();
  }
  doModify(omId:string){
    this.router.navigateByUrl('/tabs/signup/'+omId)
  }
}
