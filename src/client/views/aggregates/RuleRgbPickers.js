import React from 'react';

import hot from '../components/utils/hot';

import RulePickers from '../components/RulePickers';
import RuleRgbRPicker from '../containers/RuleRgbRPicker';
import RuleRgbGPicker from '../containers/RuleRgbGPicker';
import RuleRgbBPicker from '../containers/RuleRgbBPicker';

const RuleHcwbPickers = () =>
  <RulePickers>
      <RuleRgbRPicker/>
      <RuleRgbGPicker/>
      <RuleRgbBPicker/>
  </RulePickers>

export default hot(module, RuleHcwbPickers);
