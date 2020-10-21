import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MoviesListComponent } from './movies-list.component';

describe('MoviesListComponent', () => {
  let comp: MoviesListComponent;
  let fixture: ComponentFixture<MoviesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [MoviesListComponent],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(MoviesListComponent);
        comp = fixture.componentInstance;
      });

    it('should HAVE movies', () => {
      expect(comp.movies.length).toBeGreaterThan(
        0,
        'should have movies after service observable resolves'
      );
    });
  });
});
