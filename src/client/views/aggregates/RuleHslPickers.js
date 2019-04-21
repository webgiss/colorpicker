import React from 'react';

import hot from '../components/utils/hot';

import RulePickers from '../components/RulePickers';
import RuleHslSPicker from '../containers/RuleHslSPicker';
import RuleHslLPicker from '../containers/RuleHslLPicker';

const RuleHslPickers = () =>
  <RulePickers>
      <RuleHslSPicker/>
      <RuleHslLPicker/>
  </RulePickers>

export default hot(module, RuleHslPickers);
