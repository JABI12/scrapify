import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrapBuyingComponent } from './scrap-buying.component';

describe('ScrapBuyingComponent', () => {
  let component: ScrapBuyingComponent;
  let fixture: ComponentFixture<ScrapBuyingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScrapBuyingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScrapBuyingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
