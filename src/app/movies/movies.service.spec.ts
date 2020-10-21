import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { MoviesService } from './movies.service';
import { Movie } from './movie';

describe('MovieService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: MoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      // Import the HttpClient mocking services
      imports: [HttpClientTestingModule],
      // Provide the service-under-test
      providers: [MoviesService],
    });

    // Inject the http, test controller, and service-under-test
    // as they will be referenced by each test.
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(MoviesService);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  /// MovieService method tests begin ///
  describe('#getMovies', () => {
    let expectedMovies: Movie[];

    beforeEach(() => {
      service = TestBed.inject(MoviesService);
      expectedMovies = [
        { id: 1, title: 'Inception', dateReleased: '16-07-2010' },
        { id: 2, title: 'Lord of the Rings', dateReleased: '19-12-2001' },
        { id: 3, title: 'Avengers', dateReleased: '26-04-2019' },
        { id: 4, title: 'Batman', dateReleased: '18-07-2008' },
      ] as Movie[];
    });

    it('should return expected movies', () => {
      service
        .getMovies()
        .subscribe(
          (movies) =>
            expect(movies).toEqual(
              expectedMovies,
              'should return expected movies'
            ),
          fail
        );

      // MovieService should have made one request to GET movies from expected URL
      const req = httpTestingController.expectOne(service.moviesUrl);
      expect(req.request.method).toEqual('GET');

      // Respond with the mock heroes
      req.flush(expectedMovies);
    });

    it('should be OK returning no movies', () => {
      service
        .getMovies()
        .subscribe(
          (movies) =>
            expect(movies.length).toEqual(0, 'should have empty movies array'),
          fail
        );

      const req = httpTestingController.expectOne(service.moviesUrl);
      req.flush([]); // Respond with no movies
    });

    /* it('should return expected heroes (called multiple times)', () => {
      heroService.getHeroes().subscribe();
      heroService.getHeroes().subscribe();
      heroService.getHeroes().subscribe(
        heroes => expect(heroes).toEqual(expectedHeroes, 'should return expected heroes'),
        fail
      );

      const requests = httpTestingController.match(heroService.heroesUrl);
      expect(requests.length).toEqual(3, 'calls to getHeroes()');

      // Respond to each request with different mock hero results
      requests[0].flush([]);
      requests[1].flush([{ id: 1, name: 'bob' }]);
      requests[2].flush(expectedHeroes);
    }); */
  });

  describe('#addMovies', () => {
    beforeEach(() => {
      service = TestBed.inject(MoviesService);
    });
    it('should add a movie', () => {
      const movie: Movie = {
        id: 1,
        title: 'MyMovie',
        dateReleased: '16-07-2010',
      };
      service
        .addMovie(movie)
        .subscribe(
          (movies) =>
            expect(movies).toEqual(movie, 'should return expected movies'),
          fail
        );

      // MovieService should have made one request to GET movies from expected URL
      const req = httpTestingController.expectOne(service.moviesUrl);
      expect(req.request.method).toEqual('POST');
      expect(req.request.body).toEqual(movie);

      // Respond with the mock heroes
      req.flush(movie);
    });
  });

  /* describe('#updateHero', () => {
    // Expecting the query form of URL so should not 404 when id not found
    const makeUrl = (id: number) => `${heroService.heroesUrl}/?id=${id}`;

    it('should update a hero and return it', () => {

      const updateHero: Hero = { id: 1, name: 'A' };

      heroService.updateHero(updateHero).subscribe(
        data => expect(data).toEqual(updateHero, 'should return the hero'),
        fail
      );

      // HeroService should have made one request to PUT hero
      const req = httpTestingController.expectOne(heroService.heroesUrl);
      expect(req.request.method).toEqual('PUT');
      expect(req.request.body).toEqual(updateHero);

      // Expect server to return the hero after PUT
      const expectedResponse = new HttpResponse(
        { status: 200, statusText: 'OK', body: updateHero });
      req.event(expectedResponse);
    });

    it('should turn 404 error into user-facing error', () => {
      const msg = 'Deliberate 404';
      const updateHero: Hero = { id: 1, name: 'A' };
      heroService.updateHero(updateHero).subscribe(
        heroes => fail('expected to fail'),
        error => expect(error.message).toContain(msg)
      );

      const req = httpTestingController.expectOne(heroService.heroesUrl);

      // respond with a 404 and the error message in the body
      req.flush(msg, { status: 404, statusText: 'Not Found' });
    });

    it('should turn network error into user-facing error', () => {
      const emsg = 'simulated network error';

      const updateHero: Hero = { id: 1, name: 'A' };
      heroService.updateHero(updateHero).subscribe(
        heroes => fail('expected to fail'),
        error => expect(error.message).toContain(emsg)
      );

      const req = httpTestingController.expectOne(heroService.heroesUrl);

      // Create mock ErrorEvent, raised when something goes wrong at the network level.
      // Connection timeout, DNS error, offline, etc
      const errorEvent = new ErrorEvent('so sad', {
        message: emsg,
        // The rest of this is optional and not used.
        // Just showing that you could provide this too.
        filename: 'HeroService.ts',
        lineno: 42,
        colno: 21
      });

      // Respond with mock error
      req.error(errorEvent);
    });
  });*/

  // TODO: test other HeroService methods
});
