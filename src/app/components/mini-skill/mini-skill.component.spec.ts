import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniSkillComponent } from './mini-skill.component';

describe('MiniSkillComponent', () => {
  let component: MiniSkillComponent;
  let fixture: ComponentFixture<MiniSkillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniSkillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
