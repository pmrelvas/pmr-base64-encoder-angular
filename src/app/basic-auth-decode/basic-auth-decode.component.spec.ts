import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicAuthDecodeComponent } from './basic-auth-decode.component';

describe('BasicAuthDecodeComponent', () => {
  let component: BasicAuthDecodeComponent;
  let fixture: ComponentFixture<BasicAuthDecodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicAuthDecodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicAuthDecodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
