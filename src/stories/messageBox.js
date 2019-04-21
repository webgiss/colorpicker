import React from 'react';
import { storiesOf } from '@storybook/react';
import MessageBox from '../client/views/components/messageBox';
import { action } from '@storybook/addon-actions';
import { getReduxMockDecorator } from './utils/reduxMock';
// import '../client/views/main.css';

storiesOf('MessageBox', module)
  .add('base', () => {
    return <MessageBox 
      title='title'
      content='content'
      busy={false}
      values={[7,8,9]}
      onValidate={action('onValidate')}
      onCancel={action('onCancel')}
     />;
  })
  .add('+ busy', () => {
    return <MessageBox 
      title='title'
      content='content'
      busy={true}
      values={[7,8,9]}
      onValidate={action('onValidate')}
      onCancel={action('onCancel')}
     />;
  })
  .add('+ no content', () => {
    return <MessageBox 
      title='title'
      content={null}
      busy={false}
      values={null}
      onValidate={action('onValidate')}
      onCancel={action('onCancel')}
     />;
  })


  