import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { DataLocalService } from 'src/app/services/data-local.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  SwipeOps = {
    allowSlidePrev: false,
    allowSlideNext: false
  };

constructor( private barcodeScanner: BarcodeScanner,
              private dataLocal: DataLocalService ) {}

scan() {
  this.barcodeScanner.scan().then(barcodeData => {
    console.log('Barcode data', barcodeData);

if ( !barcodeData.cancelled ) {
  this.dataLocal.guardarRegistro(barcodeData.format, barcodeData.text);
}

   }).catch(err => {
       console.log('Error', err);

       this.dataLocal.guardarRegistro('QRCode', 'http://google.com');

   });
  }
}
