import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { BasicAuthEncodeComponent } from './basic-auth-encode/basic-auth-encode.component';
import { BasicAuthDecodeComponent } from './basic-auth-decode/basic-auth-decode.component';
import { DecodeComponent } from './decode/decode.component';
import { EncodeComponent } from './encode/encode.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

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
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatDividerModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
