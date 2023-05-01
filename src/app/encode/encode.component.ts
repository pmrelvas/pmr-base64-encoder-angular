import { Component } from '@angular/core';
import { Charsets } from '../shared/enums/charsets.enum';
import { FormControl } from '@angular/forms';
import { EncodingService } from '../shared/services/encoding.service';

@Component({
  selector: 'pmr-encode',
  templateUrl: './encode.component.html',
  styleUrls: ['./encode.component.scss']
})
export class EncodeComponent {
  charsets: BufferEncoding[] = Object.values(Charsets);
  charsetFormControl = new FormControl(Charsets.UTF8);
  textToEncodeFormControl = new FormControl('');
  encodedText = '';

  onEncodeClick(): void {
    this.encodedText = EncodingService.encodeBase64(this.textToEncodeFormControl.value || '', this.charsetFormControl.value as BufferEncoding);
  }
}
