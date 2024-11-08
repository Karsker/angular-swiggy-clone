import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopPickCardComponent } from './top-pick-card.component';

describe('TopPickCardComponent', () => {
  let component: TopPickCardComponent;
  let fixture: ComponentFixture<TopPickCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopPickCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopPickCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
