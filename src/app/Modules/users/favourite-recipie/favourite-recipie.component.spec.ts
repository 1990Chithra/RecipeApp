import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteRecipieComponent } from './favourite-recipie.component';

describe('FavouriteRecipieComponent', () => {
  let component: FavouriteRecipieComponent;
  let fixture: ComponentFixture<FavouriteRecipieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavouriteRecipieComponent]
    });
    fixture = TestBed.createComponent(FavouriteRecipieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
