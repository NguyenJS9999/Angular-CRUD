import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorCRUDComponent } from './editor-crud.component';

describe('EditorCRUDComponent', () => {
  let component: EditorCRUDComponent;
  let fixture: ComponentFixture<EditorCRUDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorCRUDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorCRUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
