import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepdetailsComponent } from './depdetails.component';

describe('DepdetailsComponent', () => {
  let component: DepdetailsComponent;
  let fixture: ComponentFixture<DepdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
