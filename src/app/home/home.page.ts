import { MongoService } from './../services/mongo.service';
import { Component, ViewChildren, QueryList } from '@angular/core';
import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeInterstitialConfig } from '@ionic-native/admob-free/ngx';
import { Storage } from '@ionic/storage';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Platform, IonRouterOutlet } from '@ionic/angular';
import { Router } from '@angular/router';
declare var $: any;
// import { MongoService }

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  coviddata: any;
  count;
  adevery;
  lastUpdated;
  indiaCases;
  indiaActive;
  indiaDeaths;
  indiaRecover;
  indiaStates;
  @ViewChildren(IonRouterOutlet) routerOutlets: QueryList < IonRouterOutlet > ;


  constructor(
    private mongo: MongoService,
    private storage: Storage ,
    private socialSharing: SocialSharing,
    private platform: Platform,
    private router: Router) {
    this.adevery = 8;
    this.storage.get('counter').then((val) => {
      if (val) {
      this.storage.set('counter', val + 1);
      this.count = val + 1;
      } else {
        this.storage.set('counter', 1);
        this.count = 1;
      }
    }).catch((err) => {
      this.count = 1;
      storage.set('counter', 1);
    });
    this.platform.backButton.subscribeWithPriority(9999, () => {
      if (this.router.url=="" ||this.router.url=="/home" ){
        navigator['app'].exitApp();
      }
      else{
        this.router.navigate(['/home']);
      }
    });
    var formatter = new Intl.NumberFormat();
// formatter.format(number);
    this.mongo.getcoviddetails().subscribe((covidata) => {
      this.lastUpdated = "Today, " + this.tConvert(covidata['india_last_updated'].toString().split(" ")[1]);
      this.indiaCases = covidata['india_total_cases'].toLocaleString('en-In');
      this.indiaDeaths = covidata['india_total_deaths'].toLocaleString('en-In');
      this.indiaRecover = covidata['india_total_recov'].toLocaleString('en-In');
      this.indiaStates = covidata['india_states'];
      this.indiaActive = (this.indiaCases - this.indiaDeaths - this.indiaRecover).toLocaleString('en-In');
    });
  }

  public share() {
    const message = 'Hey,Here is a new app that I found in the playstore.This app tracks the cases of Covid19 in India.';
    const subject = 'Do download and check out out this one.';
    const url = 'https://play.google.com/store/apps/details?id=un.shh.endlessquizapi.io';
    this.socialSharing.share(message, subject, null, url);
  }

  public call() {
    this.router.navigate(['/call']);
  }

  public info() {
    this.router.navigate(['/info']);
  }

  public news() {
    this.router.navigate(['/news']);
  }
  showState(ansid) {
    $('#' + ansid).toggle(150);
  }
  tConvert (time) {
    time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
    if (time.length > 1) { // If time format correct
      time = time.slice (1);  // Remove full string match value
      time[5] = +time[0] < 12 ? ' AM' : ' PM'; // Set AM/PM
      time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    time[3] = null;
    console.log(time);
    return time.join (''); // return adjusted time or original string
  }
}
