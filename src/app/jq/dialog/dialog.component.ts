import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';

const $ = (<any>window).$;

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(private as:AppService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.as.jqLoadComplete$.subscribe((date) => {
      if (date) {
        console.log('building dialog on element...');
        $( "#dialog" ).dialog();
      }
    })
  }

}
