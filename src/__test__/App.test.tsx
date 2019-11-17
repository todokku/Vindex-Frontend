import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import App from '../App';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createMemoryHistory } from 'history';
import { MemoryRouter } from 'react-router';
import {Top} from '../Top/TopPage'
import Header from '../components/Header'
import Footer from '../components/Footer'
import {ResistButton, SearchBox} from '../Top/TopComponents'

configure({ adapter: new Adapter() });

it('renders without crashing ', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter initialEntries={['/']} initialIndex={0}>
      <App />
    </MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('Top Page displayed collectly',() => {
  it('Components should exist',() => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']} initialIndex={0}>
        <App />
      </MemoryRouter>);
      expect(wrapper.find(Top).length).toEqual(1)
      expect(wrapper.find(Header).length).toEqual(1)
      expect(wrapper.find(ResistButton).length).toEqual(1)
      expect(wrapper.find(SearchBox).length).toEqual(1)
      expect(wrapper.find(Footer).length).toEqual(1)
  })
})