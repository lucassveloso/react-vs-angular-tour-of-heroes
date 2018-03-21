import { dispatch } from '@rematch/core';
import API from '../api';

export default {
  state: {
    heroes: [],
    heroesFound: [],
    loading: false,
  },
  reducers: {
    fetchHeroes(state) {
      return {
        ...state,
        heroes: [],
        loading: true,
      };
    },
    fetchHeroesSucceeded(state, heroes) {
      return {
        ...state,
        heroes,
        loading: false,
      };
    },
    fetchHeroesFailed(state) {
      return {
        ...state,
        heroes: [],
        loading: false,
      };
    },
    searchHeroes(state) {
      return {
        ...state,
        heroesFound: [],
        loading: true,
      };
    },
    searchHeroesSucceeded(state, heroesFound) {
      return {
        ...state,
        heroesFound,
        loading: false,
      };
    },
    searchHeroesFailed(state) {
      return {
        ...state,
        heroesFound: [],
        loading: false,
      };
    },
  },
  effects: {
    async fetchHeroesAsync() {
      this.fetchHeroes();

      try {
        const data = await API.heroes.all();
        this.fetchHeroesSucceeded(data);
        dispatch.app.addMessage('fetched heroes');
      } catch (e) {
        this.fetchHeroesFailed();
        dispatch.app.addMessage(`fetchHeroes failed: ${e.message}`);
      }
    },
    async searchHeroesAsync(term) {
      this.searchHeroes();

      try {
        const data = term ? await API.heroes.search(term) : [];
        this.searchHeroesSucceeded(data);
        dispatch.app.addMessage(`found heroes matching "${term}"`);
      } catch (e) {
        this.searchHeroesFailed();
        dispatch.app.addMessage(`searchHeroes failed: ${e.message}`);
      }
    },
  }
};
