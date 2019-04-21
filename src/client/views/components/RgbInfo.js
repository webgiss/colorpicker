import React from 'react';

import hot from './utils/hot';
import { Input, Ref, Segment } from 'semantic-ui-react';

import './RgbInfo.css';
import { ColorSquare } from './ColorSquare';

class SelectedInput extends React.Component {
    componentDidMount() {
        this.onRendered();
    }
    componentDidUpdate() {
        this.onRendered();
    }
    constructor() {
        super();
        this.handleInputRef = (node) => {
            this.inputRef = node;
        }
    }

    onRendered() {
        let input = this.inputRef.children[0];
        window.i = input;
        input.focus();
        input.setSelectionRange(0, 1000);
    }
    render() {
        return <Ref innerRef={this.handleInputRef} >
            <Input readOnly inverted className='selectedInput' value={this.props.value} />
        </Ref>;
    }
}

const ColorComponent = ({ value }) => <span className='colorComponent'>{value}</span>;

const RgbInfo = ({ rgb, hcwb, hsl, hsv, color }) => {
    return <div className='rgbInfo'>
        <SelectedInput value={color} />
        <Segment inverted>
            <ColorSquare width={'1em'} color={color} />
            {color}
            &nbsp;
            rgb(<ColorComponent value={rgb[0]} />, <ColorComponent value={rgb[1]} />, <ColorComponent value={rgb[2]} />)
            &nbsp;
            hcwb(<ColorComponent value={hcwb[0]} />, <ColorComponent value={hcwb[1]} />%, <ColorComponent value={hcwb[2]} />%, <ColorComponent value={hcwb[3]} />%)
            &nbsp;
            hsl(<ColorComponent value={hsl[0]} />, <ColorComponent value={hsl[1]} />%, <ColorComponent value={hsl[2]} />%)
            &nbsp;
            hsv(<ColorComponent value={hsv[0]} />, <ColorComponent value={hsv[1]} />%, <ColorComponent value={hsv[2]} />%)
        </Segment>
    </div>;
}

export default hot(module, RgbInfo);

