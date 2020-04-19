import { Component, OnInit } from '@angular/core';
import { MongoService } from 'src/app/services/mongo.service';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free/ngx';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {
  bannerad: any;
  adperm: any;
  adevery: any;

  constructor(
    private mongo: MongoService,
    private admob: AdMobFree
    ) {
    const bannerConfig: AdMobFreeBannerConfig = {
      isTesting: false,
      autoShow: true,
      id: 'ca-app-pub-7727484776545225/3993452572'
    };
    this.bannerad = this.admob.banner;
    this.bannerad.config(bannerConfig);
    this.mongo.getadperm().subscribe((data) => {
      this.adperm = data[0]['showads'];
      this.adevery = data[0]['adevery'];
      if (this.adperm) {
        this.showBannerAd();
      }
    });
     }

  ngOnInit() {
  }

  public showBannerAd() {
    this.bannerad.prepare().then(() => {}).catch((e) => alert(e));
  }

  showAnswer(ansid) {
    $('#' + ansid).toggle(150);
  }
}
