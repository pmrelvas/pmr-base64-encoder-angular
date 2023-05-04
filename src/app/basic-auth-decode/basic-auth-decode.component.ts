import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Charsets } from '../shared/enums/charsets.enum';
import { EncodingService } from '../shared/services/encoding.service';

@Component({
  selector: 'pmr-basic-auth-decode',
  templateUrl: './basic-auth-decode.component.html',
  styleUrls: ['./basic-auth-decode.component.scss']
})
export class BasicAuthDecodeComponent {

  charsets: BufferEncoding[] = Object.values(Charsets);
  charsetFormControl = new FormControl(Charsets.UTF8);
  textToDecodeFormControl = new FormControl('');
  decodedUsername: string = '';
  decodedPassword: string = '';

  onDecodeClick(): void {
    const decodedText = EncodingService.decodeBase64(this.textToDecodeFormControl.value || '', this.charsetFormControl.value as BufferEncoding);
    const decodedArr = decodedText.split(':');
    if (decodedArr.length != 2) {
      // TODO: add notification toast error
      return;
    }
    this.decodedUsername = decodedArr[0];
    this.decodedPassword = decodedArr[1];
  }
}
