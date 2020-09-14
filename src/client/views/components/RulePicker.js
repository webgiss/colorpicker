import hot from './utils/hot';
import CanvasByPixel from './CanvasByPixel';
import { rgbToColor } from '../../utils/colors';

class RulePicker extends CanvasByPixel {
    constructor() {
        super();
        this.functions = [
            {
                getColor: (x, y, { xToColor, xMin, xMax, yMin, yMax }) => {
                    if (x >= xMin && x <= xMax) {
                        if (y >= yMin && y <= yMax) {
                            return xToColor[x];
                        }
                    }

                    return null;
                },
                onClick: (values) => {
                    // console.log('RulePicker onClick', { ...values, data: this.props.data });
                    return this.props.onClick({ ...values, data: this.props.data })
                },
            },
            {
                getColor: (x, y, { xToColor, xLambda, xMin, xMax, yMin, yMax }) => {
                    if (x < xMin || x > xMax) {
                        const sign = x > xMax ? 1 : -1;
                        const xNewLambda = xLambda + sign;

                        if (xNewLambda >= xMin && xNewLambda <= xMax) {
                            const rgbNewColor = xToColor[xNewLambda];
                            return { ...rgbNewColor, c: this.background, rgbNewColor };
                        }
                    }
                    return null;
                },
                onClick: (data) => {
                    return this.props.onClick({ ...data.rgbNewColor, data: this.props.data })
                },
            },
            {
                getColor: (x, y, { xLambda, cursorRgbColor, yMin, yMax }) => {
                    if (x === xLambda - 1 || x === xLambda + 1) {
                        if (y >= yMin - 2 && y <= yMax + 2) {
                            return { rgb: cursorRgbColor };
                        }
                    } else if (x === xLambda) {
                        if (y === yMin - 2 || y === yMax + 2) {
                            return { rgb: cursorRgbColor };
                        }
                    }

                    return null;
                },
                onClick: () => { },
                noClick: true,
            },
        ];
    }

    get width() {
        return this.props.width + 2 * this.props.margin;
    }
    get height() {
        return this.props.height + 2 * this.props.margin;
    }

    get globalData() {
        let { lambda, lambdaToRgb, width, height, margin } = this.props;

        let xLambda = Math.round(lambda * (width - 1) + margin);
        let rgb = lambdaToRgb(lambda);
        let cursorRgbColor = [1, 1, 1];
        if (rgb[0] + rgb[1] + rgb[2] > 1.5) {
            cursorRgbColor = [0, 0, 0];
        }
        let xMin = margin;
        let xMax = width + margin - 1;
        let yMin = margin;
        let yMax = height + margin - 1;
        let xToColor = {};
        let x = xMin;
        while (x <= xMax) {
            let newLambda = (x - margin) / (width - 1);
            let rgb = lambdaToRgb(newLambda);
            let c = rgbToColor(rgb);
            xToColor[x] = { rgb, c, lambda: newLambda };
            x += 1;
        }


        return { xLambda, cursorRgbColor, rgb, xToColor, xMin, xMax, yMin, yMax };
    }

    get background() {
        return '#808080';
    }
}

export default hot(module, RulePicker);

