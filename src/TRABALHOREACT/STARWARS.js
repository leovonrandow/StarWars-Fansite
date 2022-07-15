import React from 'react';

import './STARWARS.scss';
import FOTOMAIN from '../images/FOTOMAIN.png'

export default class StarWars extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
  

    return (
      <div className="fotomain">
           <img src={FOTOMAIN} alt="" />
      </div>
      
    );
  }
}