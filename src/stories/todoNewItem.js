import React from 'react';
import { storiesOf } from '@storybook/react';
import TodoNewItem from '../client/views/components/todoNewItem';
import { action } from '@storybook/addon-actions';
import { getReduxMockDecorator } from './utils/reduxMock';
// import '../client/views/main.css';

storiesOf('TodoNewItem', module)
  .add('base', () => {
    return <TodoNewItem
      current='grut'
      onNew={action('onNew')}
      onUpdateCurrent={action('onUpdateCurrent')}
     />;
  })
