import React from 'react';
import { Helmet } from 'react-helmet';

import hot from '../components/utils/hot';

const HeadInfo = ({title}) => {
    return <Helmet>
        <title>{title}</title>
    </Helmet>;
};

export default hot(module, HeadInfo);
