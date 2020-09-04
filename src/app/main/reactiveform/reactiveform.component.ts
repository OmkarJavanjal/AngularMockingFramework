import { Component, OnInit } from '@angular/core';
import {DataserviceService} from "../../shared/services/dataservice.service";

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.scss']
})
export class ReactiveformComponent implements OnInit {

  constructor(private dataserviceService: DataserviceService) { }
  public userData;

  ngOnInit(): void {
  this.dataserviceService.getConfig().subscribe((resp) => {
    console.log('resp', resp);
    this.userData = resp;
    this.userData = this.userData && this.userData.data && this.userData.data.length > 0 ? this.userData.data[0] : resp;
  });
  }


}
