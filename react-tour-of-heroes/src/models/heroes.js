import { dispatch } from '@rematch/core';
import API from '../api';

export default {
  state: {
    hero: {},
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
    heroSelected(state, hero) {
      return { ...state, hero };
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
    async findHeroAsync(id) {
      dispatch.app.startLoading();
      try {
        const data = await API.heroes.find(id);
        this.heroSelected(data);
        dispatch.app.addMessage(`fetched hero id=${id}`);
      } catch (e) {
        this.heroSelected({});
        dispatch.app.addMessage(`getHero failed: ${e.message}`);
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
    async createHeroAsync(name) {
      dispatch.app.startLoading();
      try {
        await API.heroes.store({ name });
        dispatch.app.addMessage(`added hero w/ name=${name}`);
        await this.fetchHeroesAsync();
      } catch (e) {
        dispatch.app.addMessage(`addHero failed: ${e.message}`);
      }
      dispatch.app.finishLoading();
    },
    async updateHeroAsync(hero) {
      dispatch.app.startLoading();
      try {
        await API.heroes.update(hero);
        dispatch.app.addMessage(`updated hero id=${hero.id}`);
        await this.findHeroAsync(hero.id);
      } catch (e) {
        dispatch.app.addMessage(`updateHero failed: ${e.message}`);
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
