import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImitatorComponent } from './imitator/imitator.component';
import { NameComponent } from './name/name.component';

@NgModule({
  declarations: [
    AppComponent,
    ImitatorComponent,
    NameComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
