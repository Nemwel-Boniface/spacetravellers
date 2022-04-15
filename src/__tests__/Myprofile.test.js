import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../redux/configStore';
import MyProfile from '../components/myprofile/Myprofile'

it('This is atest to check the my profile page', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <MyProfile />
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});