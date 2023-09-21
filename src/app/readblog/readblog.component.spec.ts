import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadblogComponent } from './readblog.component';

describe('ReadblogComponent', () => {
  let component: ReadblogComponent;
  let fixture: ComponentFixture<ReadblogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReadblogComponent]
    });
    fixture = TestBed.createComponent(ReadblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
