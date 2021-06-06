import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';

const $ = (<any>window).$;

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {

  constructor(private as:AppService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.as.jqLoadComplete$.subscribe((date) => {
      if (date) {
        console.log('building accordion on element...');
        $( "#accordion" ).accordion();
      }
    })
  }
}
