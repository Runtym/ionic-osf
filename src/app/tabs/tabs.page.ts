import { Component, OnInit } from '@angular/core';
import { StorageService } from '../common/storage.service';
import { SSL_OP_ALL } from 'constants';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit  {

  constructor(private ss:StorageService) {

  }
  ngOnInit(){
    console.log(this.ss.getItem('omId'));
  }
}
