import { Injectable } from '@angular/core';
import { EncodingConsts } from '../constants/encoding.constant';
import { Buffer } from 'buffer';


@Injectable({
  providedIn: 'root'
})
export class EncodingService {

  public static encodeBase64(strToEncode: string, charset: BufferEncoding = 'utf-8'): string {
    return Buffer.from(strToEncode, charset).toString(EncodingConsts.base64);
  }

}
