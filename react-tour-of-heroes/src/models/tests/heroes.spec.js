import { init, dispatch } from "@rematch/core";
import app from '../app';
import heroes from '../heroes';
import API from '../../api';

describe('#Heroes Model', () => {
  const store = init({
    models: { heroes, app }
  });
  let heroesList = [];
  beforeEach(() => {
    heroesList = [
      { id: 1, name: 'Mr. Nice' },
      { id: 2, name: 'Narco' },
      { id: 3, name: 'Bombasto' },
      { id: 4, name: 'Celeritas' },
      { id: 5, name: 'Magneta' },
      { id: 6, name: 'RubberMan' },
      { id: 7, name: 'Dynama' },
      { id: 8, name: 'Dr IQ' },
      { id: 9, name: 'Magma' },
      { id: 10, name: 'Tornado' }
    ]
    API.heroes.all = () => new Promise(resolve => setTimeout(() => resolve(heroesList), 200));
  });

  it('should update state with APIs heroes', async () => {
    expect(store.getState().heroes.heroes).toEqual([]);
    await dispatch.heroes.fetchHeroesAsync();
    expect(store.getState().heroes.heroes).toEqual(heroesList);
  })
})
