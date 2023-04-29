import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicAuthEncodeComponent } from './basic-auth-encode.component';

describe('BasicAuthEncodeComponent', () => {
  let component: BasicAuthEncodeComponent;
  let fixture: ComponentFixture<BasicAuthEncodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicAuthEncodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicAuthEncodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
