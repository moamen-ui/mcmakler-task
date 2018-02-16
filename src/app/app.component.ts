import { Component } from '@angular/core';
import {AdvService} from "./adv.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  advs: any[];
  images: any[];

  constructor(private advService: AdvService) {}

  ngOnInit() {
    this.advService.getAdvs().subscribe(res => {



      this.advs = res['data'];

      // let images = res['data'].map(res => res.advertisementAssets);
      // let image = images[0][0].advertisementThumbnails.thumb_xs.url;
      
    })
  }
}
