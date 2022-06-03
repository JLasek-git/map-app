import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { HeaderComponent } from './components/header/header.component';
import { MapComponent } from './components/map/map.component';
import { PositionFormComponent } from './components/position-form/position-form.component';
import { PopupComponent } from './components/popup/popup.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { PolygonEditComponent } from './components/polygon-edit/polygon-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    HeaderComponent,
    MapComponent,
    PositionFormComponent,
    PopupComponent,
    MainLayoutComponent,
    ErrorMessageComponent,
    PolygonEditComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
