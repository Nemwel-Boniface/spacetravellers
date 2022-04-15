import React from "react";
import { Provider } from "react-redux";
import renderer from 'react-test-renderer';
import store from '../redux/configStore';
import Rockets from '../components/Rockets/rockets';
import Rocket from "../components/Rockets/Rocket";

describe('A tests for my Rockets component', () => {
  it('Check whether Rockets component renders', () => {
    const rocket = {
      id: 1,
      image: 'https://img.icons8.com/external-xnimrodx-blue-xnimrodx/64/000000/external-rocket-online-marketing-xnimrodx-blue-xnimrodx.png',
      name: 'falcon1',
      description: 'This is a description about Falcon 1',
      reserved: false,
    };
    const rocketTree = renderer.create(
      <Provider store={store}>
        <Rocket
          key={rocket.id}
          rocket={rocket}
          image={rocket.image}
          description={rocket.description}
          name={rocket.name}
          reserved={rocket.reserved}
        />
      </Provider>
    );
    expect(rocketTree).toMatchSnapshot();
  });


})