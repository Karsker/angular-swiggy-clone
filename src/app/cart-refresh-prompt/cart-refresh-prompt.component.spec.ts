import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartRefreshPromptComponent } from './cart-refresh-prompt.component';

describe('CartRefreshPromptComponent', () => {
  let component: CartRefreshPromptComponent;
  let fixture: ComponentFixture<CartRefreshPromptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartRefreshPromptComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CartRefreshPromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
