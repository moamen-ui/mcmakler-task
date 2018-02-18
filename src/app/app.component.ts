import { Component } from '@angular/core';
import {AdvService} from "./adv.service";

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
    });
  }
}
