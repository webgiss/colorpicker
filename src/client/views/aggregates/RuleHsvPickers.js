import React from 'react';

import hot from '../components/utils/hot';

import RulePickers from '../components/RulePickers';
import RuleHsvSPicker from '../containers/RuleHsvSPicker';
import RuleHsvVPicker from '../containers/RuleHsvVPicker';

const RuleHsvPickers = () =>
  <RulePickers>
      <RuleHsvSPicker/>
      <RuleHsvVPicker/>
  </RulePickers>

export default hot(module, RuleHsvPickers);
