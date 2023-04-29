import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'pmr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private router: Router) {

  }

  onEncodeClick(): void {
    this.router.navigate(['encode']);
  }

  onDecodeClick(): void {
    this.router.navigate(['decode']);
  }

  onBasicAuthEncodeClick(): void {
    this.router.navigate(['basic-auth-encode']);
  }

  onBasicAuthDecodeClick(): void {
    this.router.navigate(['basic-auth-decode']);
  }
}
