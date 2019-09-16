import React from 'react';

import hot from '../components/utils/hot';

import { Segment, Container } from 'semantic-ui-react';
import TrianglePicker from '../containers/TrianglePicker';
import TrianglePickerX from '../containers/TrianglePickerX';
import RgbInfo from '../containers/RgbInfo';
import RuleRgbPickers from './RuleRgbPickers';
import RuleHcwbPickers from './RuleHcwbPickers';
import RuleHslPickers from './RuleHslPickers';
import RuleHsvPickers from './RuleHsvPickers';
import HeadInfo from '../containers/HeadInfo';

import './ColorPage.css'

const ColorPage = () =>
    <Container>
        <HeadInfo/>
        <Segment inverted>
            <RgbInfo />
            <TrianglePicker className='trianglePicker' />
            <RuleRgbPickers />
            <RuleHcwbPickers />
            <RuleHslPickers />
            <RuleHsvPickers />
        </Segment>
    </Container>

export default hot(module, ColorPage);
