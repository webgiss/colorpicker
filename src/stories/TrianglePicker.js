import React from 'react';
import { storiesOf } from '@storybook/react';
import TrianglePicker from '../client/views/components/TrianglePicker';
import { action } from '@storybook/addon-actions';
import { getReduxMockDecorator } from './utils/reduxMock';
import { withKnobs, number, object } from '@storybook/addon-knobs/react';
// import '../client/views/main.css';

storiesOf('TrianglePicker', module)
    .addDecorator(withKnobs)
    .add('base', () => {
        // const hue = number('Hue', 360);
        return <TrianglePicker
            hue={171/360.}
            width={200}
            onHueClick={({h, rgb})=>action('onHueClick')(h, rgb.join(', '))}
            onColorClick={({c, rgb})=>action('onColorClick')(c, rgb.join(', '))}
        />;
    })
