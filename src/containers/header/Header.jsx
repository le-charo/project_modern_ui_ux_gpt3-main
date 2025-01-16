import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__textd">Go&apos;wherever, whenever</h1>
      <p> babaana is the all-in-one mobility app.  Get picked up by a top-rated driver in minutes and enjoy a comfortable ride to wherever you’re going; or skip the traffic entirely on one of our industry-leading scooters.</p>
      

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      
    </div>
  </div>
);

export default Header;
