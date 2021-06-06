import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccordionComponent } from './jq/accordion/accordion.component';
import { DialogComponent } from './jq/dialog/dialog.component';
import { ColorAnimationComponent } from './jq/color-animation/color-animation.component';
import { DatePickerComponent } from './jq/date-picker/date-picker.component';
import { ThemesComponent } from './jq/themes/themes.component';
import { ColorSliderComponent } from './jq/color-slider/color-slider.component';
import { ColorPickerComponent } from './jq/color-picker/color-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    AccordionComponent,
    DialogComponent,
    ColorAnimationComponent,
    DatePickerComponent,
    ThemesComponent,
    ColorSliderComponent,
    ColorPickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
