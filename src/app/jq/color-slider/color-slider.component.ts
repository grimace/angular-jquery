import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppService } from '../../services/app.service';

const $ = (<any>window).$;


@Component({
  selector: 'app-color-slider',
  templateUrl: './color-slider.component.html',
  styleUrls: ['./color-slider.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ColorSliderComponent implements OnInit {

  constructor(private as:AppService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.as.jqLoadComplete$.subscribe((date) => {
      if (date) {
        $( function() {
          function hexFromRGB(r, g, b) {
            var hex = [
              r.toString( 16 ),
              g.toString( 16 ),
              b.toString( 16 )
            ];
            $.each( hex, function( nr, val ) {
              if ( val.length === 1 ) {
                hex[ nr ] = "0" + val;
              }
            });
            return hex.join( "" ).toUpperCase();
          }
          function refreshSwatch() {
            var red = $( "#red" ).slider( "value" ),
              green = $( "#green" ).slider( "value" ),
              blue = $( "#blue" ).slider( "value" ),
              hex = hexFromRGB( red, green, blue );
            $( "#swatch" ).css( "background-color", "#" + hex );
          }

          $( "#red, #green, #blue" ).slider({
            orientation: "horizontal",
            range: "min",
            max: 255,
            value: 127,
            slide: refreshSwatch,
            change: refreshSwatch
          });
          $( "#red" ).slider( "value", 255 );
          $( "#green" ).slider( "value", 140 );
          $( "#blue" ).slider( "value", 60 );
        } );

      }
    })
  }

}
