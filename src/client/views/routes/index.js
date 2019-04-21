import React from 'react';
import { Route } from 'react-router';
import ColorPage from '../aggregates/ColorPage';

export default () => (
    <>
        <Route exact path='/' component={ColorPage} />
        <Route exact path='/rgb/:r/:g/:b' component={ColorPage} />
        <Route exact path='/hcwb/:h/:c/:b/:w' component={ColorPage} />
        <Route exact path='/hsl/:h/:s/:l' component={ColorPage} />
        <Route exact path='/hsv/:h/:s/:v' component={ColorPage} />
        <Route exact path='/color/:color' component={ColorPage} />
        <Route exact path='/:color' component={ColorPage} />
    </>
);
