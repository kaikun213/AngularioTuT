import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let heroes = [
      {id: 11, name: 'Mr. Nice', clicks: 1},
      {id: 12, name: 'Narco', clicks: 0},
      {id: 13, name: 'Bombasto', clicks: 0},
      {id: 14, name: 'Celeritas', clicks: 0},
      {id: 15, name: 'Magneta', clicks: 0},
      {id: 16, name: 'RubberMan', clicks: 0},
      {id: 17, name: 'Dynama', clicks: 0},
      {id: 18, name: 'Dr IQ', clicks: 0},
      {id: 19, name: 'Magma', clicks: 0},
      {id: 20, name: 'Tornado', clicks: 0}
    ];
    return {heroes};
  }
}
