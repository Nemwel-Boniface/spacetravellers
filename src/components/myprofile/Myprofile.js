import React from 'react';
import Populateprofile from '../populateprofile/Populateprofile';
import './myprofile.css';

const Myprofile = () => (
  <div className="myProfile">
    <section className="my-missions">
      <h2>My Mission</h2>
      <Populateprofile />
    </section>
    <section className="my-rockets">
      <h2>My Rockets</h2>
      <Populateprofile />
    </section>
  </div>
);

export default Myprofile;
