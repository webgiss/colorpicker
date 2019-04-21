import React from 'react';
import { storiesOf } from '@storybook/react';
import TodoList from '../client/views/components/todoList';
import { action } from '@storybook/addon-actions';
import { getReduxMockDecorator } from './utils/reduxMock';
// import '../client/views/main.css';

storiesOf('TodoList', module)
  .add('base', () => {
    return <TodoList 
      list={{
        'item 1': true, 
        'item 2': true, 
        'item 3': false,
        'item 4': true,
      }}
      onItemSelected={action('onItemSelected')}
     />;
  })
  .add('+ no elements', () => {
    return <TodoList 
      list={{
      }}
      onItemSelected={action('onItemSelected')}
     />;
  })
  .add('+ all todo', () => {
    return <TodoList 
      list={{
        'item 1': true, 
        'item 2': true, 
        'item 3': true,
        'item 4': true,
      }}
      onItemSelected={action('onItemSelected')}
     />;
  })
  .add('+ all done', () => {
    return <TodoList 
      list={{
        'item 1': false, 
        'item 2': false, 
        'item 3': false,
        'item 4': false,
      }}
      onItemSelected={action('onItemSelected')}
     />;
  })
  .add('+ accents', () => {
    return <TodoList 
      list={{
        'itém 1': true, 
        'itèm 2': true, 
        'item 3': false,
        'item 4': true,
      }}
      onItemSelected={action('onItemSelected')}
     />;
  })


  