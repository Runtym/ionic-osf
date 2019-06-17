import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.page.html',
  styleUrls: ['./movie.page.scss'],
})
export class MoviePage implements OnInit {
  video:any={
    title:'Youtube Test',
    url:'https://www.youtube-nocookie.com/embed/-nH1MAPR9UY?controls=0'
  }
  trustedVideoUrl: SafeResourceUrl;
  constructor(
    private navCtrl:NavController,
    private ds:DomSanitizer
  ) { }

  ngOnInit() {
    this.trustedVideoUrl = this.ds.bypassSecurityTrustResourceUrl(this.video.url);
  }
}
