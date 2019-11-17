import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import App from '../App';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createMemoryHistory } from 'history';
import { MemoryRouter } from 'react-router';
import Top from '../Top/TopPage'

configure({ adapter: new Adapter() });

it('renders without crashing ', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('<header /> should exist', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.find('header.App-header').length).toEqual(1)
})

describe('Route collectly',() => {
  it('Top page should exists',() => {
    const wrapper = shallow(
      <MemoryRouter initialEntries={['/']} initialIndex={0}>
        <App />
      </MemoryRouter>);
      expect(wrapper.find(Top).length).toEqual(1)
  })
})