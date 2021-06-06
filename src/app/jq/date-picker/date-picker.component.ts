import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppService } from '../../services/app.service';

const $ = (<any>window).$;

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DatePickerComponent implements OnInit {

  constructor(private as:AppService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.as.jqLoadComplete$.subscribe((date) => {
      if (date) {
        console.log('building datepicker on element...');
        $( "#datepicker" ).datepicker();      }
    })
  }
}
