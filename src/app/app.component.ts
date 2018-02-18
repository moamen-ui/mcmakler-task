import { Component } from '@angular/core';
import {AdvService} from "./adv.service";
import { AdvItem } from './adv-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  advItem: AdvItem[];
  advs: any[];
  images: any[];

  items: any[];

  constructor(private advService: AdvService) {}

  ngOnInit() {
    this.advService.getAdvs().subscribe(res => {

      // this.advItem = [
      //   {
      //     title:  res['data'].map(res => res.title)
      //   }
      // ];


      this.advs = res['data'];
      this.items = [{
        title: res['data'].map(res => res.title),
        rooms: res['data'].map(res => res.realestateSummary.numberOfRooms)
      }];
      console.log(this.advItem);
      // let images = res['data'].map(res => res.advertisementAssets);
      // let image = images[0][0].advertisementThumbnails.thumb_xs.url;
      
    })
  }
}
