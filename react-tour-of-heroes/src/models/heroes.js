import { dispatch } from '@rematch/core';
import API from '../api';

export default {
  state: {
    heroes: [],
    heroesFound: [],
  },
  reducers: {
    heroesFetched(state, heroes) {
      return { ...state, heroes, heroesFound: [] };
    },
    heroesSearched(state, heroesFound) {
      return { ...state, heroesFound };
    },
  },
  effects: {
    async fetchHeroesAsync() {
      dispatch.app.startLoading();
      try {
        const data = await API.heroes.all();
        this.heroesFetched(data);
        dispatch.app.addMessage('fetched heroes');
      } catch (e) {
        this.heroesFetched([]);
        dispatch.app.addMessage(`fetchHeroes failed: ${e.message}`);
      }
      dispatch.app.finishLoading();
    },
    async searchHeroesAsync(term) {
      dispatch.app.startLoading();
      try {
        const data = term ? await API.heroes.search(term) : [];
        this.heroesSearched(data);
        dispatch.app.addMessage(`found heroes matching "${term}"`);
      } catch (e) {
        this.heroesSearched([]);
        dispatch.app.addMessage(`searchHeroes failed: ${e.message}`);
      }
      dispatch.app.finishLoading();
    },
    async onCreateHeroAsync(name) {
      dispatch.app.startLoading();
      try {
        await API.heroes.store({ name });
        dispatch.app.addMessage(`added hero w/ name=${name}`);
        await this.fetchHeroesAsync();
      } catch (e) {
        dispatch.app.addMessage(`add hero failed: ${e.message}`);
      }
      dispatch.app.finishLoading();
    },
    async deleteHeroAsync(id) {
      dispatch.app.startLoading();
      try {
        await API.heroes.destroy(id);
        dispatch.app.addMessage(`deleted hero id=${id}`);
        await this.fetchHeroesAsync();
      } catch (e) {
        dispatch.app.addMessage(`deleted hero failed: ${e.message}`);
      }
      dispatch.app.finishLoading();
    },
  }
};
