import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Charsets } from '../shared/enums/charsets.enum';
import { EncodingService } from '../shared/services/encoding.service';

@Component({
  selector: 'pmr-basic-auth-encode',
  templateUrl: './basic-auth-encode.component.html',
  styleUrls: ['./basic-auth-encode.component.scss']
})
export class BasicAuthEncodeComponent {
  charsets: BufferEncoding[] = Object.values(Charsets);
  charsetFormControl = new FormControl(Charsets.UTF8);
  usernameFormControl = new FormControl('',  Validators.required);
  passwordFormControl = new FormControl('',  Validators.required);
  passwordType = 'password';
  encodedText = '';

  isPasswordHidden(): boolean {
    return this.passwordType === 'password';
  }

  togglePasswordVisibility(): void {
    this.passwordType =this.isPasswordHidden() ? 'text' : 'password';
  }

  onEncodeClick(): void {
    const username = this.usernameFormControl.value;
    const password = this.passwordFormControl.value;
    const charset = this.charsetFormControl.value;
    this.encodedText = EncodingService.encodeBase64(username + ':' + password, charset as BufferEncoding);
  }

  isEncodeBtnDisabled(): boolean {
    return !this.usernameFormControl.valid || !this.passwordFormControl.valid;
  }
}
