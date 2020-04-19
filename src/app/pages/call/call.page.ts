import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-call',
  templateUrl: './call.page.html',
  styleUrls: ['./call.page.scss'],
})
export class CallPage implements OnInit {
  numbers;
  constructor() {
    this.numbers = [
      {
        statename: 'Andhra Pradesh',
        number: [
          '0866-2410978'
        ]
      },
      {
        statename: 'Arunachal Pradesh',
        number: [
          '9436055743'
        ]
      },
      {
        statename: 'Assam',
        number: [
          '6913347770'
        ]
      },
      {
        statename: 'Bihar',
        number: [
          '104'
        ]
      },
      {
        statename: 'Chhattisgarh',
        number: [
          '104'
        ]
      },
      {
        statename: 'Goa',
        number: [
          '104'
        ]
      },
      {
        statename: 'Gujarat',
        number: [
          '104'
        ]
      },
      {
        statename: 'Haryana',
        number: [
          '8558893911'
        ]
      },
      {
        statename: 'Himachal Pradesh',
        number: [
          '104'
        ]
      },
      {
        statename: 'Jharkhand',
        number: [
          '104'
        ]
      },
      {
        statename: 'Karnataka',
        number: [
          '104'
        ]
      },
      {
        statename: 'Kerala',
        number: [
          '0471-2552056'
        ]
      },
      {
        statename: 'Madhya Pradesh',
        number: [
          '0755-2527177'
        ]
      },
      {
        statename: 'Maharashtra',
        number: [
          '020-26127394'
        ]
      },
      {
        statename: 'Manipur',
        number: [
          '3852411668'
        ]
      },
      {
        statename: 'Meghalaya',
        number: [
          '108'
        ]
      },
      {
        statename: 'Mizoram',
        number: [
          '102'
        ]
      },
      {
        statename: 'Nagaland',
        number: [
          '7005539653'
        ]
      },
      {
        statename: 'Odisha',
        number: [
          '9439994859'
        ]
      },
      {
        statename: 'Punjab',
        number: [
          '104'
        ]
      },
      {
        statename: 'Rajasthan',
        number: [
          '0141-2225624'
        ]
      },
      {
        statename: 'Sikkim',
        number: [
          '104'
        ]
      },
      {
        statename: 'Tamil Nadu',
        number: [
          '044-29510500'
        ]
      },
      {
        statename: 'Telangana',
        number: [
          '104'
        ]
      },
      {
        statename: 'Tripura',
        number: [
          '0381-2315879'
        ]
      },
      {
        statename: 'Uttarakhand',
        number: [
          '104'
        ]
      },
      {
        statename: 'Uttar Pradesh',
        number: [
          '18001805145'
        ]
      },
      {
        statename: 'West Bengal',
        number: [
          '1800313444222',
          '03323412600'
        ]
      },
      {
        statename: 'Andaman and Nicobar Islands',
        number: [
          '03192-232102'
        ]
      },
      {
        statename: 'Chandigarh',
        number: [
          '9779558282'
        ]
      },
      {
        statename: 'Dadra and Nagar Haveli and Daman & Diu',
        number: [
          '104'
        ]
      },
      {
        statename: 'Delhi',
        number: [
          '011-22307145'
        ]
      },
      {
        statename: 'Jammu & Kashmir',
        number: [
          '01912520982',
          '0194-2440283'
        ]
      },
      {
        statename: 'Ladakh',
        number: [
          '01982256462'
        ]
      },
      {
        statename: 'Lakshadweep',
        number: [
          '104'
        ]
      },
      {
        statename: 'Puducherry',
        number: [
          '104'
        ]
      }
    ];

   }

  ngOnInit() {
  }

}
