import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DisplayShowsInfoComponent } from './display-shows-info.component';
import { DisplayShowsService } from '../display-shows.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TVFakeService } from '../tvfake.service';

describe('DisplayShowsInfoComponent', () => {
  let component: DisplayShowsInfoComponent;
  let fixture: ComponentFixture<DisplayShowsInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ DisplayShowsInfoComponent ],
      providers: [{provide: DisplayShowsService, useClass: TVFakeService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayShowsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
