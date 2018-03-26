import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import List, { Item } from './index';


configure({ adapter: new Adapter() });
describe('#Dashboard - List', () => {
  it('should render items with name and link to detail of hero', async () => {
    const heroes = [
      { id: 1, name: 'Mr. Nice' },
      { id: 2, name: 'Narco' },
      { id: 3, name: 'Bombasto' },
      { id: 4, name: 'Celeritas' },
    ]
    const renderedComponent = shallow(<List data={heroes} />);
    expect(renderedComponent.find(Item).length).toEqual(heroes.length);
    heroes.forEach((hero, i) => {
      expect(renderedComponent.find(Item).at(i).props().to).toEqual(`/detail/${heroes[i].id}`);
      expect(renderedComponent.find(Item).at(i).props().children).toEqual(heroes[i].name);
    });
  })
})
