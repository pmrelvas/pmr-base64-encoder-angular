import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { BasicAuthEncodeComponent } from './basic-auth-encode/basic-auth-encode.component';
import { BasicAuthDecodeComponent } from './basic-auth-decode/basic-auth-decode.component';
import { DecodeComponent } from './decode/decode.component';
import { EncodeComponent } from './encode/encode.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicAuthEncodeComponent,
    BasicAuthDecodeComponent,
    DecodeComponent,
    EncodeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
