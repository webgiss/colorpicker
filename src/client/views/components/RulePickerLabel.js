import React from 'react';

import hot from './utils/hot';
import RulePicker from './RulePicker';

import './RulePickerLabel.css';


const RulePickerLabel = (props) => {
    const { lambda, name } = props;
    return <div className='rulePickerLabel'>
        {
            React.createElement(RulePicker, props)
        }
        <span className='rulePickerLabelName'>{name}</span>
        <span className='rulePickerLabelLabel'>{lambda}</span>
    </div>;
}

export default hot(module, RulePickerLabel);

