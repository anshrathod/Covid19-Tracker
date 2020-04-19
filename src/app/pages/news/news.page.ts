import { MongoService } from './../../services/mongo.service';
import { Component, OnInit } from '@angular/core';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  newsdata: any;
  bannerad: any;
  adperm: any;
  adevery: any;
  constructor(
    private admob: AdMobFree,
    private mongo: MongoService,
    private iab: InAppBrowser) {
    this.mongo.getcovidnews().subscribe((val) => {
      // tslint:disable-next-line:no-string-literal
      console.log(val[0]['news']);
      // tslint:disable-next-line: no-string-literal
      this.newsdata = val[0]['news'];
      console.log(this.newsdata);
      this.newsdata = this.newsdata.reverse();
    });
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
  public showNews(a){
    const browser = this.iab.create(a);
  }
}
