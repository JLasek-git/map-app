import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { UtilityBarComponent } from './components/utility-bar/utility-bar.component';
import { MapComponent } from './components/map/map.component';
import { CoordinatesFormComponent } from './components/coordinates-form/coordinates-form.component';
import { PopupComponent } from './components/popup/popup.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { PolygonEditButtonComponent } from './components/polygon-edit-button/polygon-edit-button.component';
import { BackdropComponent } from './components/backdrop/backdrop.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    UtilityBarComponent,
    MapComponent,
    CoordinatesFormComponent,
    PopupComponent,
    MainLayoutComponent,
    ErrorMessageComponent,
    PolygonEditButtonComponent,
    BackdropComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
