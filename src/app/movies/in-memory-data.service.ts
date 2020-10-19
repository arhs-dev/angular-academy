import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Movie } from './movie';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const movies: Movie[] = [
      { id: 1, title: 'Inception', dateReleased: '16-07-2010' },
      { id: 2, title: 'Lord of the Rings', dateReleased: '19-12-2001' },
      { id: 3, title: 'Avengers', dateReleased: '26-04-2019' },
      { id: 4, title: 'Batman', dateReleased: '18-07-2008' },
    ];
    return { movies };
  }
}
