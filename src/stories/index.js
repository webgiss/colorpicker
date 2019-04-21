import { addDecorator } from '@storybook/react';
import {action} from '@storybook/addon-actions';
import StoryRouter from 'storybook-react-router';

addDecorator(StoryRouter({'*':action('router')}));

let stories = [
    'TrianglePicker',
    'RulePicker',
];

stories.forEach(element => {
    require('./'+element);
});
