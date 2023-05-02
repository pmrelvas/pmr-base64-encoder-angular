import { Component } from '@angular/core';
import { EncodingService } from '../shared/services/encoding.service';
import { FormControl } from '@angular/forms';
import { Charsets } from '../shared/enums/charsets.enum';

@Component({
  selector: 'pmr-decode',
  templateUrl: './decode.component.html',
  styleUrls: ['./decode.component.scss']
})
export class DecodeComponent {

  charsets: BufferEncoding[] = Object.values(Charsets);
  charsetFormControl = new FormControl(Charsets.UTF8);
  textToDecodeFormControl = new FormControl('');
  decodedText = '';

  onDecodeClick(): void {
    this.decodedText = EncodingService.decodeBase64(this.textToDecodeFormControl.value || '', this.charsetFormControl.value as BufferEncoding);
  }
}
