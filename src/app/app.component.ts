import { Component } from '@angular/core';
import {AdvItem, AdvService} from "./adv.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  advs: any[];

  constructor(private advService: AdvService) {}

  ngOnInit() {
    this.advService.getAdvs().subscribe(res => {



      this.advs = res['data'];



      // let title = res['data'].map(res => res.title)
      // let price = res['data'].map(res => res.advertisementPrice.sellPrice)
      // let rooms = res['data'].map(res => res.numberOfRooms)
      // let address = res['data'].map(res => res.realestateSummary.address.fullAddress)

      // let imageUrl = res['data'].map(res => res.advertisementAssets[0].advertisementThumbnails.inventory_m.url);

      // let imageWidth = res['data'].map(res => res.advertisementAssets.advertisementThumbnails.inventory_m.metadata.width)
      // let imageHeight = res['data'].map(res => res.advertisementAssets.advertisementThumbnails.inventory_m.metadata.height)
      // let thumbUrl = res['data'].map(res => res.advertisementAssets.advertisementThumbnails.thumb_xs.url)
      // let thumbWidth = res['data'].map(res => res.advertisementAssets.advertisementThumbnails.thumb_xs.metadata.width)
      // let thumbHeight = res['data'].map(res => res.advertisementAssets.advertisementThumbnails.thumb_xs.metadata.height)
      // console.log(imageUrl);
      // console.log(address[0]);
    })
  }
}
