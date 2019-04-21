import React from 'react';

import hot from '../components/utils/hot';

import RulePickers from '../components/RulePickers';
import RuleHcwbHPicker from '../containers/RuleHcwbHPicker';
import RuleHcwbCPicker from '../containers/RuleHcwbCPicker';
import RuleHcwbWPicker from '../containers/RuleHcwbWPicker';
import RuleHcwbBPicker from '../containers/RuleHcwbBPicker';

const RuleHcwbPickers = () =>
  <RulePickers>
      <RuleHcwbHPicker/>
      <RuleHcwbCPicker/>
      <RuleHcwbWPicker/>
      <RuleHcwbBPicker/>
  </RulePickers>

export default hot(module, RuleHcwbPickers);
