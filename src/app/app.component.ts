import { Component, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AppService } from './services/app.service';

const $ = (<any>window).$;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    // '../assets/jquery/themes/le-frog/jquery-ui.css',
    './app.component.scss'
  ],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'angular-jquery';
  // '../assets/jquery/themes/humanity/jquery-ui.css',

  themes = [
    { id:1, name:'black-tie'},
    { id:2, name:'blitzer'},
    { id:3, name:'cupertino'},
    { id:4, name:'dark-hive'},
    { id:5, name:'dot-luv'},
    { id:6, name:'eggplant'},
    { id:7, name:'excite-bike'},
    { id:8, name:'flick'},
    { id:9, name:'hot-sneaks'},
    { id:10, name:'humanity'},
    { id:11, name:'le-frog'},
    { id:12, name:'mint-choc'},
    { id:13, name:'overcast'},
    { id:14, name:'pepper-grinder'},
    { id:15, name:'redmond'},
    { id:16, name:'smoothness'},
    { id:17, name:'south-street'},
    { id:18, name:'start'},
    { id:19, name:'sunny'},
    { id:20, name:'swanky-purse'},
    { id:21, name:'trontastic'},
    { id:22, name:'ui-darkness'},
    { id:23, name:'ui-lightness'},
    { id:24, name:'vader'}
  ];
  selectedTheme = this.themes[0];

  cssUrl: string;

  constructor( private as:AppService, public sanitizer: DomSanitizer, private cdr:ChangeDetectorRef ) {
      this.reloadCss();
      this.loadTheme(this.selectedTheme);
  }

  ngAfterViewInit() {
    let self = this;
    this.as.jqLoadComplete$.subscribe((date) => {
      if (date) {
        console.log('building selectmenu on element...');
        $( "#themes" ).selectmenu({
          change: function(event, ui) {
            // alert(ui.item.value);
            self.loadThemeById(ui.item.value);
          }
        });
        // $("#themes").on('change', function() {
        //   // var first = $('#themes').val();
        //   // console.log()
        //   // alert( 'x');
        // });
      }
    })
  }

  onThemeSelected(event) {
    console.log('onThemeSelected : ',event);
    var first = $('#themes').val();
    console.log('selected theme : ',first);
    // alert( 'x');
  }

  reloadCss() {
    const randomIntegerInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    const n = randomIntegerInRange(1, 100) % this.themes.length;
    let base = '../assets/jquery/themes/';
    let name = this.themes[n];
    this.cssUrl = base+name+'/jquery-ui.css';
  }

  loadThemeById(id) {
    let theme;
    for (let t of this.themes) {
      if (id == t.id) {
        theme = t;
        break;
      }
    }
    let base = '../assets/jquery/themes/';
    let name = theme.name;
    this.cssUrl = base+name+'/jquery-ui.css';
    this.refresh();
  }

  loadTheme(theme) {
    let base = '../assets/jquery/themes/';
    let name = theme.name;
    this.cssUrl = base+name+'/jquery-ui.css';
  }

  reload() {
     this.reloadCss();
     // this.refresh();
  }

  refresh() {
     let to = function() {
       this.cdr.markForCheck();
       this.cdr.detectChanges()
     }
     setTimeout(to.bind(this),100);
  }
}
