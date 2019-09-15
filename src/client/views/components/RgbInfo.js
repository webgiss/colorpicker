import React from 'react';

import hot from './utils/hot';
import { Input, Ref, Segment } from 'semantic-ui-react';

import './RgbInfo.css';
import { ColorSquare } from './ColorSquare';
import { CopyToClipboard } from 'react-copy-to-clipboard';

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
            <CopyToClipboard text={color}>
                <span className='toClipboard'>{color}</span>
            </CopyToClipboard>
            &nbsp;
            -
            &nbsp;
            <CopyToClipboard text={`rgb(${rgb[0]},${rgb[1]},${rgb[2]})`}>
                <span className='toClipboard'>rgb(<ColorComponent value={rgb[0]} />, <ColorComponent value={rgb[1]} />, <ColorComponent value={rgb[2]} />)</span>
            </CopyToClipboard>
			&nbsp;
            -
			&nbsp;
            <CopyToClipboard text={`hcwb(${hcwb[0]},${hcwb[1]},${hcwb[2]},${hcwb[3]})`}>
                <span className='toClipboard'>hcwb(<ColorComponent value={hcwb[0]} />, <ColorComponent value={hcwb[1]} />%, <ColorComponent value={hcwb[2]} />%, <ColorComponent value={hcwb[3]} />%)</span>
            </CopyToClipboard>
			&nbsp;
            -
			&nbsp;
            <CopyToClipboard text={`hsl(${hsl[0]},${hsl[1]}%,${hsl[2]}%)`}>
                <span className='toClipboard'>hsl(<ColorComponent value={hsl[0]} />, <ColorComponent value={hsl[1]} />%, <ColorComponent value={hsl[2]} />%)</span>
            </CopyToClipboard>
			&nbsp;
            -
			&nbsp;
            <CopyToClipboard text={`hsv(${hsv[0]},${hsv[1]}%,${hsv[2]}%)`}>
                <span className='toClipboard'>hsv(<ColorComponent value={hsv[0]} />, <ColorComponent value={hsv[1]} />%, <ColorComponent value={hsv[2]} />%)</span>
            </CopyToClipboard>
		</Segment>
    </div>;
}

export default hot(module, RgbInfo);

