import React from 'react';

import hot from './utils/hot';

import './RulePickers.css';

const RulePickers = ({ children }) =>
  <div className='rulePickers'>
    {children}
  </div>;

export default hot(module, RulePickers);
