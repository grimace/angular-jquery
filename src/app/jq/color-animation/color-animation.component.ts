import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';

const $ = (<any>window).$;

@Component({
  selector: 'app-color-animation',
  templateUrl: './color-animation.component.html',
  styleUrls: ['./color-animation.component.scss']
})
export class ColorAnimationComponent implements OnInit {

  constructor(private as:AppService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.as.jqLoadComplete$.subscribe((date) => {
      if (date) {
        console.log('building accordion on element...');
        $( function() {
            var state = true;
            $( "#button" ).on( "click", function() {
              if ( state ) {
                $( "#effect" ).animate({
                  backgroundColor: "#aa0000",
                  color: "#fff",
                  width: 500
                }, 1000 );
              } else {
                $( "#effect" ).animate({
                  backgroundColor: "#fff",
                  color: "#000",
                  width: 240
                }, 1000 );
              }
              state = !state;
            });
        } );
      }
    })
  }

}
