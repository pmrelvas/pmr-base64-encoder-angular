import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EncodeComponent } from './encode/encode.component';
import { DecodeComponent } from './decode/decode.component';
import { BasicAuthDecodeComponent } from './basic-auth-decode/basic-auth-decode.component';
import { BasicAuthEncodeComponent } from './basic-auth-encode/basic-auth-encode.component';

const routes: Routes = [
  { path: 'encode', component: EncodeComponent },
  { path: 'decode', component: DecodeComponent },
  { path: 'basic-auth-encode', component: BasicAuthEncodeComponent },
  { path: 'basic-auth-decode', component: BasicAuthDecodeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
